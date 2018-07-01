import {addParamsToUrl} from './utils';

export const fetchWrapperCreator = ({
  addParamsToUrl,
}) => async (apiUrl, options, params) => {
  const version = process.env.REACT_APP_OPEN_WEATHER_MAP_API_VERSION;
  const url = `https://api.openweathermap.org/data/${version}/${apiUrl}`;

  const urlWithParams = addParamsToUrl(url, {
    ...params,
    APPID: process.env.REACT_APP_OPEN_WEATHER_MAP_APPID,
    units: 'metric',
  });

  const response = await fetch(urlWithParams, {
    ...options,
    headers: {
      ...options.headers
    }
  });

  if (response.ok) {
    return response;
  }

  throw response;
};


export const fetchWrapper = fetchWrapperCreator({
  addParamsToUrl,
});
