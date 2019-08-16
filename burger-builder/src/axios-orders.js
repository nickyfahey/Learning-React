import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-8cd73.firebaseio.com/'
});

export default instance;
