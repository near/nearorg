import { eventsApiKey, eventsApiUrl } from './config';

export type EventItem = {
  api_id: string;
  event: {
    api_id: string;
    name: string;
    description: string;
    start_at: string;
    end_at: string;
    cover_url: string;
    url: string;
    geo_address_json: any;
  };
};

type EventsListData = {
  entries: EventItem[];
  hasMore: boolean;
};

export const fetchEvents = async (limit: number, offset: number): Promise<EventsListData> => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const afterDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

  const queryFrom = `after=${afterDate}`;
  const queryLimit = `pagination_limit=${limit ?? 10}`;
  const queryOffset = offset ? `pagination_offset=${offset}` : '';
  const queryParams = [queryFrom, queryLimit, queryOffset].filter(Boolean).join('&');

  const res = await fetch(`${eventsApiUrl}/calendar/list-events?${queryParams}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-luma-api-key': eventsApiKey as string,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = (await res.json()) as {
    entries: EventItem[];
    has_more: boolean;
  };

  return { entries: data.entries, hasMore: data.has_more };
};
