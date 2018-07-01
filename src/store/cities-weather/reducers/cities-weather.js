import {
  ADD_CITY,
  DELETE_CITY,
  CHANGE_CITIES_ORDER,
} from '../actions';

import {createReducer} from 'store/common';

const initialState = {
  list: [],
  order: '',
};

const actionHandlers = new Map([
  [
    ADD_CITY,
    (citiesWeather, action) => {
      const {
        cityWeather,
      } = action.payload;

      const cities = citiesWeather.list;
      const cityIndex = cities.findIndex(({id}) => id === cityWeather.id);
      if (cityIndex === -1) {
        return {
          ...citiesWeather,
          list: [
            ...cities,
            cityWeather,
          ],
        };
      }

      return {
        ...citiesWeather,
        list: [
          ...cities.slice(0, cityIndex),
          cityWeather,
          ...cities.slice(cityIndex + 1),
        ],
      };
    }
  ],
  [
    DELETE_CITY,
    (citiesWeather, action) => {
      const {
        cityId,
      } = action.payload;

      const cities = citiesWeather.list;
      const cityIndex = cities.findIndex(({id}) => id === cityId);
      if (cityIndex === -1) {
        return citiesWeather;
      }

      return {
        ...citiesWeather,
        list: [
          ...cities.slice(0, cityIndex),
          ...cities.slice(cityIndex + 1),
        ],
      }
    }
  ],
  [
    CHANGE_CITIES_ORDER,
    (cityWeatherList, action) => {
      const {
        order,
      } = action.payload;

      if (order === cityWeatherList.order) {
        return {
          ...cityWeatherList,
          list: [...cityWeatherList.list.reverse()]
        }
      }

      return {
        ...cityWeatherList,
        list: [...cityWeatherList.list.sort((a, b) => a > b)],
        order,
      }
    }
  ]
]);

export const citiesWeather = createReducer(actionHandlers, initialState);
