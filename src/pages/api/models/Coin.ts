import mongoose, { Schema, Document } from 'mongoose';

interface Delta {
  hour: number;
  day: number;
  week: number;
  month: number;
  quarter: number;
  year: number;
}

interface CoinDocument extends Document {
  symbol: string;
  name: string;
  price: number;
  volume: number;
  cap: number;
  delta: Delta;
  timestamp: Date;
}

const deltaSchema = new Schema({
  hour: Number,
  day: Number,
  week: Number,
  month: Number,
  quarter: Number,
  year: Number,
});

const coinSchema = new Schema({
  symbol: { type: String },
  name: { type: String},
  price: { type: Number},
  volume: { type: Number},
  cap: { type: Number },
  delta: { type: deltaSchema },
  timestamp: { type: Date, default: Date.now },
});

const Coin = mongoose.model<CoinDocument>('Coin', coinSchema);

export default Coin;
