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
          'x-api-key': '304568a3-a781-40e7-b3ac-8f316e5d0b5e',
        },
      }
    );

    const coins = response.data;
    console.log('coins',coins)

    for (const coin of coins) {
      const newCoin = new Coin({
        symbol: coin.code,
        name: coin.name,
        price: coin.rate,
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
  setInterval(fetchCoinData, 20000); 
};

export default pollData;
