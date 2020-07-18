import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllIntervalResources = (intervalId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/intervals/${intervalId}`)
    .then((result) => {
      const intervalInfo = result.data;
      resolve(intervalInfo);
    })
    .catch((err) => reject(err));
});

export default { getAllIntervalResources };
