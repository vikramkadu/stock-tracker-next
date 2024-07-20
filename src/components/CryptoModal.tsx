import React, { useEffect, useState } from 'react';
import styles from '@/styles/CryptoModal.module.css';

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (symbol: string) => void;
  symbol: string;
}

const CryptoModal: React.FC<CryptoModalProps> = ({ isOpen, onClose, symbol, onSelect }) => {
  const [selectedSymbol, setSelectedSymbol] = useState(symbol);

  const options = [
    { value: 'BTC', label: 'Bitcoin (BTC)' },
    { value: 'ETH', label: 'Ethereum (ETH)' },
    { value: 'USDT', label: 'USDT' },
    { value: 'BNB', label: 'Binance Coin (BNB)' },
    { value: 'SOL', label: 'Solana (SOL)' },
  ];

  useEffect(() => {
    setSelectedSymbol(symbol);
  }, [symbol]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSelect(selectedSymbol);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Select Cryptocurrency</h2>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label htmlFor="crypto-select">Choose a cryptocurrency:</label>
          <select
            id="crypto-select"
            className={styles.select}
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value)}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.button}>Select</button>
            <button type="button" className={styles.button} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CryptoModal;
