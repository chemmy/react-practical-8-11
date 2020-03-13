import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2'
const KEY = '2411a33b9b7f44e4b7fa7c094d3e5b7c';

const getQueryParams = paramArr => {
  return paramArr.map(param => {
    return `&${param.key}=${param.value}`
  }).join('');
};

const newsapi = {
  get: (url, data) => axios.get(`${BASE_URL}${url}?apiKey=${KEY}${getQueryParams(data)}`),
};

export default newsapi;