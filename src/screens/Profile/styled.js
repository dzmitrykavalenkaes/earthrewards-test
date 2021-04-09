import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.primary,
}))``;

export const ShowBalanceButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 200px;
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.white};
`;

export const Balance = styled.Text`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.primaryGrey};
`;

export const ErrorText = styled(Balance)`
  font-weight: 500;
  font-size: 20px;
  color: ${({ theme }) => theme.primaryRed};
  text-align: center;
`;
