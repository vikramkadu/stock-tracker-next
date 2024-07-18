import mongoose from 'mongoose';

const coinSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

const Coin = mongoose.models.Coin || mongoose.model('Coin', coinSchema);

export default Coin;
