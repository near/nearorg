export async function fetchSocialDb<T extends Record<string, any>>(method: 'get' | 'keys', keys: string[]) {
  const stringifiedKeys = keys.join('&keys=');
  const url = `https://api.near.social/${method}?keys=${stringifiedKeys}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    if (response.ok) {
      return json as T;
    }
  } catch (error) {
    console.error('Failed to fetch Social DB keys:', url, error);
  }

  return null;
}
