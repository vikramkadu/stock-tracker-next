import { NextApiRequest, NextApiResponse } from 'next';
import Coin from './models/Coin';
import connectDB from './config/db';
import pollData from '@/pollData';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  pollData();

  const { symbol } = req.query;

  const data = await Coin?.find({ symbol })
    .sort({ timestamp: -1 })
    .limit(20);
  res.status(200).json(data);
};
