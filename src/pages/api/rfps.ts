import type { NextApiRequest, NextApiResponse } from 'next';

import { rfps } from '@/data/rfps';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ rfps });
}
