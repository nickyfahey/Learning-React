import axios from 'axios';

// an instance will take the global config but override anything
// set in the instance
// will not include interceptors added to the global config

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'INSTANCE AUTH TOKEN';

instance.interceptors.response.use(response => {
  console.log('Instance Response:',response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
