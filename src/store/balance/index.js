import { createSlice } from '@reduxjs/toolkit';

import initialState from './handlers';
import reducer from './reducer';

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {},
  extraReducers: reducer,
});

export default balanceSlice.reducer;
