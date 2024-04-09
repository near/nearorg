import { useEffect, useState } from 'react';

import { fetchSocialDb } from '@/utils/social-db';

// TODO: Refactor this hook to use something like ReactQuery

export function useSocialDb<T extends Record<string, any>>(method: 'get' | 'keys', keys: string[]) {
  const [data, setData] = useState<T | null>(null);
  const stringifiedKeys = keys.join('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchSocialDb(method, keys);
        setData(result as any);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, stringifiedKeys]);

  return {
    data,
  };
}
