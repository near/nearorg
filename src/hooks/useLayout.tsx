import type { ReactElement } from 'react';

import { DefaultLayout } from '@/components/layouts/DefaultLayout';

export function useDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}
