import { createAsyncThunk } from '@reduxjs/toolkit';

const walletAddress = '0xb984cd9fea5bbb4b8a645af9859d27dab9b3b19c';

export const fetchBalance = createAsyncThunk('', async contract => {
  const balance = await contract.methods.balanceOf(walletAddress).call();

  return balance;
});
