import {
  fetchWrapper,
} from '../fetch-wrapper';

const API_URL = 'weather';

export const weatherAPICreator = ({
  fetchWrapper,
}) => {
  return {
    async getWeatherInCity(cityName) {
      const params = {
        q: cityName,
      };

      const options = {
        method: 'GET',
      };

      const response = await fetchWrapper(API_URL, options, params);

      return response.json();
    },
  };
};

export const weatherAPI = weatherAPICreator({
  fetchWrapper,
});
