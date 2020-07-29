import axios from 'axios';
import hookKeys from '../hookKeys.json';

const hookTheoryAuth = () => axios.post('https://api.hooktheory.com/v1/users/auth', hookKeys.hookKeys).then((response) => {
  sessionStorage.setItem('hookApi', response.data.activkey);
});

const getMostFrequentlyUsedChords = () => new Promise((resolve, reject) => {
  axios.get('https://api.hooktheory.com/v1/trends/nodes', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('hookApi')}`,
    },
  })
    .then((result) => {
      const chordData = result.data;
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getMostLikelyNextChord = (chordId) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/nodes?cp=${chordId}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('hookApi')}`,
    },
  })
    .then((result) => {
      const chordData = result.data;
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getMostLikelyNextChordsInSelectedProgression = (chord1, chord2) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/nodes?cp=${chord1},${chord2}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('hookApi')}`,
    },
  })
    .then((result) => {
      const chordData = result.data;
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getSongsThatUseSelectedProgression = (chord1, chord2) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/songs?cp=${chord1},${chord2}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('hookApi')}`,
    },
  })
    .then((result) => {
      const songData = result.data;
      resolve(songData);
    })
    .catch((err) => reject(err));
});

export default {
  hookTheoryAuth,
  getMostFrequentlyUsedChords,
  getMostLikelyNextChord,
  getMostLikelyNextChordsInSelectedProgression,
  getSongsThatUseSelectedProgression,
};
