import {
  getBalanceRequest,
  getBalanceSuccess,
  getBalanceFailure,
} from './handlers';
import { fetchBalance } from './thunks';

const reducer = builder => {
  builder.addCase(fetchBalance.pending, getBalanceRequest);
  builder.addCase(fetchBalance.fulfilled, getBalanceSuccess);
  builder.addCase(fetchBalance.rejected, getBalanceFailure);
};

export default reducer;
