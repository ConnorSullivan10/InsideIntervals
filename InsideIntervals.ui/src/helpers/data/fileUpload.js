import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const uploadFile = (file, title, journalEntry, firebaseUid) => new Promise((resolve, reject) => {
  const form = new FormData();
  // adding field to form being submitted to server, and setting field equal to raw contents of chosen file
  form.append('file', file);
  // debugger; DELETE WHEN FINISHED USING

  axios.post(`${baseUrl}/userEntry/fileUpload`, form)
    .then((response) => {
      const newJournalEntry = {
        firebaseUid,
        entryName: title,
        entryInput: journalEntry,
        uploadedFileId: response.data,
      };
      axios.post(`${baseUrl}/userEntry/newEntry`, newJournalEntry);
      resolve();
    })
    .catch((error) => reject(error));
});

export default { uploadFile };
