import axios from 'axios';

const hookTheoryAuth = () => axios.post('https://api.hooktheory.com/v1/users/auth', {
  username: 'cksullvn',
  password: 'nssCapstone20',
}).then((response) => {
  console.error(response.data);
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
      console.error(chordData);
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getMostLikelyNextChord = (chordId) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/nodes?cp=${chordId}`)
    .then((result) => {
      const chordData = result.data;
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getMostLikelyNextChordInSelectedProgression = (chord1, chord2) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/nodes?cp=${chord1},${chord2}`)
    .then((result) => {
      const chordData = result.data;
      resolve(chordData);
    })
    .catch((err) => reject(err));
});

const getSongsThatUseSelectedProgression = (chord1, chord2) => new Promise((resolve, reject) => {
  axios.get(`https://api.hooktheory.com/v1/trends/songs?cp=${chord1},${chord2}`)
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
  getMostLikelyNextChordInSelectedProgression,
  getSongsThatUseSelectedProgression,
};
