import { useEffect, useState } from 'react';

const COOKIES_PREFERENCE_KEY = 'cookies-preference';
type CookiePreference = 'only_required' | 'all' | null;

export function useCookiePreferences() {
  const [cookiesPreference, _setCookiesPreference] = useState<CookiePreference>(null);

  useEffect(() => {
    const storedPreference = localStorage.getItem(COOKIES_PREFERENCE_KEY);

    if (storedPreference) {
      _setCookiesPreference(storedPreference as CookiePreference);
    }
  }, []);

  const setCookiesPreference = (preference: CookiePreference) => {
    _setCookiesPreference(preference);

    if (preference) {
      localStorage.setItem(COOKIES_PREFERENCE_KEY, preference);
    } else {
      localStorage.removeItem(COOKIES_PREFERENCE_KEY);
    }
  };

  return {
    cookiesPreference,
    setCookiesPreference,
  };
}
