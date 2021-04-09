import styled from 'styled-components/native';

const logoSource = require('images/earth-rewards-logo.png');

export const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoContainer = styled.View`
  height: 80px;
  width: 300px;
`;

export const Logo = styled.Image.attrs(() => ({
  source: logoSource,
}))`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: ${({ theme }) => theme.primaryGrey};
  text-align: center;
`;
