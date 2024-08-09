import { getCookiePreferences } from '@near-pagoda/ui';
import { get, truncate } from 'lodash';
import { nanoid } from 'nanoid';
import type { UIEvent } from 'react';

import type Analytics from '../types/rudderstack-analytics';

let rudderAnalytics: Analytics | null = null;
let anonymousUserId = '';
let userAgentDetail = '';
let anonymousUserIdCreatedAt = '';
let pendingEvents: any = [];
let cookieOptOut = false;
export const cookiePreferences = { onlyRequired: 'only_required', all: 'all' };
let clientsideReferrer = '';
let userCountryCode = '';

declare global {
  interface Window {
    rudderAnalytics: Analytics | undefined;
  }
}

export function setReferrer(referrer: string) {
  clientsideReferrer = referrer;
}

function getAnonymousId() {
  if (anonymousUserId) {
    return anonymousUserId;
  }

  const storageId = localStorage.getItem('anonymousUserId');
  anonymousUserIdCreatedAt = localStorage.getItem('anonymousUserIdCreatedAt') || '';

  if (storageId) {
    anonymousUserId = storageId;
  } else {
    anonymousUserId = nanoid();
    anonymousUserIdCreatedAt = new Date().toUTCString();
    localStorage.setItem('anonymousUserId', anonymousUserId);
    localStorage.setItem('anonymousUserIdCreatedAt', anonymousUserIdCreatedAt);
  }

  return anonymousUserId;
}

function getUserAgent() {
  if (!userAgentDetail) {
    const nav: any = navigator;
    nav.userAgentData &&
      nav.userAgentData.getHighEntropyValues(['platformVersion', 'model']).then((ua: any) => {
        userAgentDetail = ua;
      });
  }
  return userAgentDetail;
}

export function optOut(onlyRequiredCookies: boolean) {
  cookieOptOut = onlyRequiredCookies;
}

function readCountryCodeCookie() {
  let countryCode = '';
  try {
    const cc = document.cookie.split(';').filter((v) => v.indexOf('user-country-code') !== -1);
    countryCode = cc.length > 0 ? cc[0].split('=')[1] : '';
  } catch (e) {
    console.log('failed to read user-country-code cookie', e);
  }

  return countryCode;
}

export async function init() {
  getUserAgent();

  if (window?.rudderAnalytics) return;

  getAnonymousId();

  //pick up any change to cookie preferences on init (full page reload)
  const cookiePreference = getCookiePreferences();
  optOut(cookiePreference === cookiePreferences.onlyRequired);
  userCountryCode = readCountryCodeCookie();

  const rudderStackDataPlaneUrl = 'https://near.dataplane.rudderstack.com';

  const destinationkeys = { prod: '2f101MRnb7Y8Sb3Ama9b2AE7xfh', stage: '2f14hJlveNpsrfxeJcZpcYmqBcf' };
  let analyticsUrl = rudderStackDataPlaneUrl;
  if (typeof window !== 'undefined') {
    analyticsUrl = `${window.location.protocol}//${window.location.host}/api/analytics`;
  }

  try {
    const key = window.location.href.indexOf('https://near.org') !== -1 ? destinationkeys.prod : destinationkeys.stage;
    window.rudderAnalytics = await import('rudder-sdk-js');
    window.rudderAnalytics.load(key, analyticsUrl);
    rudderAnalytics = window.rudderAnalytics;
    if (rudderAnalytics) rudderAnalytics.setAnonymousId(getAnonymousId());
    for (const event of pendingEvents) {
      event();
    }
    pendingEvents = [];
  } catch (e) {
    console.error(e);
  }
}

export function recordPageView(pageName: string) {
  if (cookieOptOut) return;
  if (!rudderAnalytics) {
    pendingEvents.push(() => {
      recordPageView(pageName);
    });
    return;
  }
  try {
    rudderAnalytics.page('category', pageName, {
      url: window.location.href,
      userAgentDetail,
      clientsideReferrer,
      userCountryCode,
    });
  } catch (e) {
    console.error(e);
  }
}

const record = (eventType: string, e: UIEvent | PointerEvent) => {
  const key = get(e.target, 'placeholder', get(e.target, 'innerText', get(e.target, 'href')));
  recordEventWithProps(eventType, {
    element: truncate(key, { length: 255 }),
    url: e.target ? (e.target as HTMLElement).baseURI : '',
    xPath: getXPath(e.target as HTMLElement),
    componentSrc: getComponentName(e.target as HTMLElement),
    clientsideReferrer,
    userCountryCode,
  });
};
export const recordClick = (e: UIEvent | PointerEvent) => record('click', e);
export const recordMouseEnter = (e: UIEvent) => record('mouseover', e);
export const recordTouchStart = (e: UIEvent | PointerEvent) => record('touchstart', e);

export function reset() {
  if (!rudderAnalytics || cookieOptOut) return;
  try {
    localStorage.removeItem('anonymousUserId');
    localStorage.removeItem('anonymousUserIdCreatedAt');
    rudderAnalytics.reset();
  } catch (e) {
    console.error(e);
  }
}

export function recordEventWithProps(eventLabel: string, properties: Record<string, string>) {
  if (!rudderAnalytics || cookieOptOut) return;
  try {
    rudderAnalytics.track(eventLabel, {
      ...properties,
      userAgentDetail,
      anonymousUserIdCreatedAt,
      clientsideReferrer,
      userCountryCode,
    });
  } catch (e) {
    console.error(e);
  }
}

export function recordHandledError(props: Record<string, string>) {
  recordEventWithProps('error-handled', props);
}

export function recordEvent(eventLabel: string) {
  if (!rudderAnalytics || cookieOptOut) return;
  try {
    rudderAnalytics.track(eventLabel, {
      hashId: localStorage.getItem('hashId'),
      url: window.location.href,
      userAgentDetail,
      anonymousUserIdCreatedAt,
      clientsideReferrer,
      userCountryCode,
    });
  } catch (e) {
    console.error(e);
  }
}

function getComponentName(element: HTMLElement | null): string {
  if (!element) return '';
  if (element.hasAttribute('data-component')) return element.getAttribute('data-component') || '';
  return '';
}

function getXPath(element: HTMLElement | null): string {
  if (!element) return '';
  if (element.id !== '') return 'id("' + element.id + '")';
  if (element === document.body) return element.tagName;

  let ix = 0;
  const siblings = element.parentNode?.children;
  if (!siblings) return '';

  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i];
    if (sibling === element) return getXPath(element.parentElement) + '/' + element.tagName + '[' + (ix + 1) + ']';
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }

  return '';
}
