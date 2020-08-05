import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const getAllUserEntries = (firebaseUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/userEntry/user/${firebaseUid}`)
    .then((result) => {
      const userInfo = result.data;
      resolve(userInfo);
    })
    .catch((err) => reject(err));
});

const deleteUserEntry = (entryId) => axios.delete(`${baseUrl}/userEntry/${entryId}`);

const addUserFeedback = (feedback) => axios.post(`${baseUrl}/userEntry/feedback`, feedback);

export default { getAllUserEntries, deleteUserEntry, addUserFeedback };
