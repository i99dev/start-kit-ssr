import axios from 'axios';


export const Json = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
