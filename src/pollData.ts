import axios from 'axios';
import connectDB from './pages/api/config/db';
import Coin from './pages/api/models/Coin';

const fetchCoinData = async () => {
  try {
    const response = await axios.post(
      'https://api.livecoinwatch.com/coins/list',
      {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 5,
        meta: false,
      },
      {
        headers: {
          'content-type': 'application/json',
          'x-api-key': process.env.LIVECOIN_API_KEY,
        },
      }
    );

    const coins = response.data;
    for (const coin of coins) {
      const newCoin = new Coin({
        symbol: coin.code,
        name: coin.name,
        price: coin.rate,
        volume: coin.volume,
        cap: coin.cap,
        delta: coin.delta,
        timestamp: new Date(),
      });
      await newCoin.save();
    }
    console.log('Data polled and saved');
  } catch (error) {
    console.error('Error polling data:', error);
  }
};

const pollData = async () => {
  await connectDB();
  setInterval(fetchCoinData, 10000); 
};

export default pollData;
