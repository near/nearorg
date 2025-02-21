import { useCallback } from 'react';

interface TrackingEvent {
  element_id: string;
  element_type: string;
  interaction_type: string;
  timestamp: string;
}

export const useInteractionTracking = () => {
  const trackRef = useCallback((element: HTMLElement | null, trackingId: string) => {
    if (!element) return;

    const handleInteraction = (event: MouseEvent | TouchEvent) => {
      const trackingEvent: TrackingEvent = {
        element_id: trackingId,
        element_type: element.tagName.toLowerCase(),
        interaction_type: event.type,
        timestamp: new Date().toISOString(),
      };

      // Send to analytics
      if (typeof window !== 'undefined' && window.rudderanalytics) {
        window.rudderanalytics.track('Element Interaction', trackingEvent);
      }
    };

    element.addEventListener('click', handleInteraction);
    element.addEventListener('touchstart', handleInteraction);

    return () => {
      element.removeEventListener('click', handleInteraction);
      element.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return { trackRef };
};
