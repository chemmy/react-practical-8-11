import axios from 'axios';

const KEY = '2411a33b9b7f44e4b7fa7c094d3e5b7c';


const request = (config) => {
  const a = {
    ...config,
    baseURL: 'https://newsapi.org/v2',
    params: {
      apiKey: KEY,
      ...config.data,
    },
    headers: {
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      // 'Access-Control-Allow-Headers': 'Content-Type',

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    },
  }
  console.log(a);
  return axios(a);
};

const newsapi = {
  get: (url, data) => {
    console.log(data)
    request({ url, method: 'get', data })
  },
};

export default newsapi;