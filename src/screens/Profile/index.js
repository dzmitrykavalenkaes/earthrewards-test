import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useContract } from 'context/web3';
import { fetchBalance } from 'store/balance/thunks';

import * as S from './styled';

const Profile = () => {
  const dispatch = useDispatch();
  const { balance, loading, error } = useSelector(state => state.balance);
  const { value } = useContract();

  const showBalance = () => dispatch(fetchBalance(value));

  if (loading) {
    return (
      <S.ProfileContainer>
        <S.Loader />
      </S.ProfileContainer>
    );
  }

  return (
    <S.ProfileContainer>
      <S.ShowBalanceButton onPress={showBalance}>
        <S.ButtonText>Show Balance</S.ButtonText>
      </S.ShowBalanceButton>
      {!!balance && <S.Balance>{balance}</S.Balance>}
      {!!error.length && <S.ErrorText>{error}</S.ErrorText>}
    </S.ProfileContainer>
  );
};

export default Profile;
