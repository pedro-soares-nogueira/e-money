import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    throw new Error('Method not allowed');
  }

  try {
    const transactionsArray = await prisma.transaction.findMany({
      include: { Category: true },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const transactions = JSON.parse(JSON.stringify(transactionsArray));

    return res.status(200).json({ transactions });
  } catch (error) {
    console.log(error);
  }
}
