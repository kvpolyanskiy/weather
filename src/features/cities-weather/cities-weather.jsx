import React from 'react';
import styled from 'styled-components';

import {
  AddCity,
  CitiesList,
} from './components';

const CitiesWeatherWrapper = styled.div`
  min-width: ${({theme}) => theme.minPageWidth};
  max-width: ${({theme}) => theme.maxPageWidth};
  margin: ${({theme}) => theme.pageMargin};
  padding: ${({theme}) => theme.pagePadding};
`;

export class CitiesWeather extends React.Component {
  render() {
    return (
      <CitiesWeatherWrapper>
        <AddCity />
        <CitiesList />
      </CitiesWeatherWrapper>
    );
  }
}
