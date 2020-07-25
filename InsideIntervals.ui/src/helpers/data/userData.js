import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllUserEntries = (firebaseUid) => new Promise((resolve, reject) => {
  console.log(firebaseUid);
  axios.get(`${baseUrl}/userEntry/user/${firebaseUid}`)
    .then((result) => {
      const userInfo = result.data;
      resolve(userInfo);
    })
    .catch((err) => reject(err));
});

export default { getAllUserEntries };
