const initialState = {
  balance: null,
  loading: false,
  error: '',
};

export const getBalanceRequest = state => ({
  ...state,
  loading: true,
});

export const getBalanceSuccess = (state, action) => ({
  ...state,
  loading: false,
  error: '',
  balance: action.payload,
});

export const getBalanceFailure = state => ({
  ...state,
  loading: false,
  error: 'Oops, something went wrong. Please, try again',
});

export default initialState;
