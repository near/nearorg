import { useEffect, useState } from 'react';

import { fetchEvents } from '@/utils/events';

export type MappedEvent = {
  date: string;
  description: string;
  location: any;
  thumbnail: string;
  title: string;
  url: string;
};

// TODO: Refactor this hook to use something like ReactQuery

export function useLatestEvents(limit = 3) {
  const [events, setEvents] = useState<MappedEvent[]>([]);
  const [hasMoreEvents, setHasMoreEvents] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchEvents(limit, 0);

        const sortedEvents = [...result.entries]
          .sort((a, b) => new Date(a.event.start_at).getTime() - new Date(b.event.start_at).getTime())
          .slice(0, limit);

        const mappedEvents = sortedEvents.map((item) => {
          return {
            date: formatDate(item.event.start_at, item.event.end_at),
            description: item.event.description,
            location: formatLocation(item.event.geo_address_json),
            thumbnail: item.event.cover_url,
            title: item.event.name,
            url: item.event.url,
          };
        });

        setEvents(mappedEvents);
        setHasMoreEvents(result.hasMore);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [limit]);

  const formatDate = (startAt: string, endAt: string) => {
    // Example Format: "Jul 21 - Jul 23, 2023"

    const startAtDate = new Date(startAt);
    const endAtDate = new Date(endAt);

    const startAtDateFormatted = startAtDate.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    });

    const endAtDateFormatted = endAtDate.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return `${startAtDateFormatted} - ${endAtDateFormatted}`;
  };

  const formatLocation = (location: any) => {
    if (location.city || location.city_state) {
      return `${location.city ?? location.city_state}, ${location.country}`;
    }
    return location.address;
  };

  return {
    events,
    hasMoreEvents,
  };
}
