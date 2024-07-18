import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface StockState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: StockState = {
  data: [],
  loading: false,
  error: null
};

export const fetchStockData = createAsyncThunk(
  'stock/fetchStockData',
  async (symbol: string) => {
    const response = await axios.get(`/api/stocks?symbol=${symbol}`);
    return response.data;
  }
);

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch stock data';
      });
  }
});

export default stockSlice.reducer;
