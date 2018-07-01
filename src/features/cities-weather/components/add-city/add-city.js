import {connect} from 'react-redux';
import {
  withProps,
  compose,
} from 'recompose';

import {
  fetchCityWeather,
} from 'store/cities-weather';

import {InputWithSubmit} from 'components/common';

const withButtonNameAddCity = withProps({buttonName: 'Add'});

const withConnectedStateAddCity = connect(null, {
  submit: fetchCityWeather,
});

export const AddCity = compose(
  withButtonNameAddCity,
  withConnectedStateAddCity,
)(InputWithSubmit);
