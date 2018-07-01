export const ADD_CITY = 'ADD_CITY';

export const addCity = (cityWeather) => ({
  type: ADD_CITY,
  payload: {
    cityWeather,
  },
});
