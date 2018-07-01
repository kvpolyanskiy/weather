import {connect} from 'react-redux';
import {
  CitiesList as CitiesListComponent,
} from 'components';

import {
  selectCitiesWeatherList,
  deleteCity,
  changeCitiesOrder,
} from 'store/cities-weather';

const mapStateToProps = (state) => ({
  listItems: selectCitiesWeatherList(state),
});
export const CitiesList = connect(mapStateToProps, {
  changeCitiesOrder,
  deleteCity,
})(CitiesListComponent);
