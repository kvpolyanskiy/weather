export const CHANGE_CITIES_ORDER = 'CHANGE_CITIES_ORDER';

export const changeCitiesOrder = (order) => ({
  type: CHANGE_CITIES_ORDER,
  payload: {
    order,
  },
});
