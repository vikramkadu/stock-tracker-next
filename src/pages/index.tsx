import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchStockData } from '@/redux/stockSlice';
import CryptoModal from '@/components/CryptoModal';
import styles from '@/styles/Home.module.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.stock);
  const [symbol, setSymbol] = useState('BTC');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStockData(symbol));

    const intervalId = setInterval(() => {
      dispatch(fetchStockData(symbol));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [dispatch, symbol]);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (error) return <p className={styles.message}>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Real-Time Crypto Tracker: {symbol}</h1>
        <button className={styles.button} onClick={handleOpenModal}>Change</button>
      </div>
      <CryptoModal isOpen={isModalOpen} onClose={handleCloseModal} onSelect={handleSymbolChange} symbol={symbol} />
      <table  className={styles.table}>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry, index) => (
            <tr key={entry._id}>
              <td>{index + 1}</td>
              <td>{entry.symbol}</td>
              <td>${entry.price.toFixed(2)}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
