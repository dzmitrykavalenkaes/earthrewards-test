import React from 'react';
import 'react-native-gesture-handler';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import AppNavigator from 'navigation/AppNavigator';
import { Web3Provider } from 'context/web3';
import store from 'store';
import theme from 'theme';

import * as S from './styled';

const App = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <S.SafeArea>
        <S.TopBar />
        <Web3Provider>
          <AppNavigator />
        </Web3Provider>
      </S.SafeArea>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
