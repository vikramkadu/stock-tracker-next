import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchStockData } from '@/redux/stockSlice';
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.stock);
  const [symbol, setSymbol] = useState('BTC');

  useEffect(() => {
    dispatch(fetchStockData(symbol));
  }, [dispatch, symbol]);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  if (loading) return <p className={styles.message}>Loading...</p>;
  if (error) return <p className={styles.message}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Real-Time Stock/Crypto Tracker</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handleSymbolChange('ETH')}>Ethereum (ETH)</button>
        <button className={styles.button} onClick={() => handleSymbolChange('USDT')}>USDT</button>
        <button className={styles.button} onClick={() => handleSymbolChange('BNB')}>Binance Coin (BNB)</button>
        <button className={styles.button} onClick={() => handleSymbolChange('SOL')}>Solana (SOL)</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.symbol}</td>
              <td>{entry.price}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
