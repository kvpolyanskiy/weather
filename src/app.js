import React, { Component } from 'react';
import {Provider} from 'react-redux';
import  styled, {ThemeProvider} from 'styled-components';

import {theme} from './theme';
import {initStore} from 'store';
import {CitiesWeather} from 'features';

const AppWrapper = styled.div`
  color: ${({theme}) => theme.defaultColor};
  font-family: ${({theme}) => theme.fontFamily};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={initStore()}>
          <AppWrapper>
            <CitiesWeather />
          </AppWrapper>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
