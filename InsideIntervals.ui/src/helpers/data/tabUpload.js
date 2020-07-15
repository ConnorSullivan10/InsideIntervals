import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const uploadFile = (file) => new Promise((resolve, reject) => {
  const form = new FormData();
  // adding field to form being submitted to server, and setting field equal to raw contents of chosen file
  form.append('file', file.raw);
  // debugger; DELETE WHEN FINISHED USING

  axios.post(`${baseUrl}/tabs`, form)
    .then(() => {
      console.log('the tab upload worked');
      resolve();
    })
    .catch((error) => reject(error));
});

export default { uploadFile };
