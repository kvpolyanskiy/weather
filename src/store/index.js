import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';

import {citiesWeather} from './cities-weather/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  citiesWeather,
});

export const initStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
