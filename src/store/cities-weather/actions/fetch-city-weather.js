import api from 'api';

import {
  addCity,
} from './add-city';

export const fetchCityWeatherCreator = ({
  weatherAPI,
  addCity,
}) => (cityName) => async (dispatch) => {
  const cityWeather = await weatherAPI.getWeatherInCity(cityName);

  dispatch(addCity(cityWeather));
};

export const fetchCityWeather = fetchCityWeatherCreator({
  weatherAPI: api.weather,
  addCity,
});
