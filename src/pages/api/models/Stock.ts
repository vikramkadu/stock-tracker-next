import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now }
});

const Stock = mongoose.models.Stock || mongoose.model('Stock', stockSchema);

export default Stock;
