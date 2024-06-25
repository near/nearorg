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
    geo_address_json?: any;
    geo_address_info?: any;
  };
};

type EventsListData = {
  entries: EventItem[];
  hasMore: boolean;
};

export const fetchEvents = async (limit: number, offset: number): Promise<EventsListData> => {
  const eventsApiUrl = 'https://api.lu.ma';
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const afterDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD

  const queryFrom = `after=${afterDate}`;
  const queryLimit = `pagination_limit=${limit ?? 10}`;
  const queryOffset = offset ? `pagination_offset=${offset}` : '';
  const queryParams = [queryFrom, queryLimit, queryOffset].filter(Boolean).join('&');
  // Let's leave this for testing
  // get-items?calendar_api_id=cal-dzvTEx2EC4F2tk8&period=past

  const res = await fetch(`${eventsApiUrl}/calendar/get-items?calendar_api_id=cal-dzvTEx2EC4F2tk8&${queryParams}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
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
