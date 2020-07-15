import firebase from 'firebase';
import constants from '../constants.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(constants.firebaseConfig);
  }
};

export default firebaseApp;
