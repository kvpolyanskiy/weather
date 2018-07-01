import _ from 'lodash';

const shouldAddParam = (paramValue) => {
  return !_.isUndefined(paramValue) && paramValue !== '';
}

export const addParamsToUrl = (url, paramsToAdd) => {
  const params = new URLSearchParams();

  Object.keys(paramsToAdd).forEach(key => {
    const paramValue = paramsToAdd[key];

    if (shouldAddParam(paramValue)) {
      if (_.isArray(paramValue)) {
        paramValue.forEach((value) => {
          params.append(key, value);
        });
      } else {
        params.append(key, paramValue);
      }
    }
  });

  const sign = params.toString() === '' ? '' : '?';

  return `${url}${sign}${params}`;
}
