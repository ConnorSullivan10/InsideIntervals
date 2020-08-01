import axios from 'axios';
import { baseUrl } from '../apiKeys.json';

const uploadFile = (file, title, journalEntry, firebaseUid) => {
  const form = new FormData();
  // adding field to form being submitted to server, and setting field equal to raw contents of chosen file
  form.append('file', file);

  return axios.post(`${baseUrl}/userEntry/fileUpload`, form)
    .then((response) => {
      const newJournalEntry = {
        firebaseUid,
        entryName: title,
        entryInput: journalEntry,
        uploadedFileId: response.data,
      };
      return axios.post(`${baseUrl}/userEntry/newEntry`, newJournalEntry);
    });
};

export default { uploadFile };
