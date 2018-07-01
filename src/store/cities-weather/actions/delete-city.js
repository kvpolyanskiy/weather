export const DELETE_CITY = 'DELETE_CITY';

export const deleteCity = (cityId) => ({
  type: DELETE_CITY,
  payload: {
    cityId,
  },
});
