import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

// axios global config
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'; // default


// Interceptors

axios.interceptors.request.use(request => {
  console.log('Request:', request);

  // if the request is not returned the request is blocked
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log('Response:',response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

// To remove an interceptor:
// var myInterceptor = axios.interceptors.request.use(() => {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
