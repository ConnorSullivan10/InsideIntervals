import firebase from 'firebase';

const getUid = () => firebase.auth().currentUser.uid;

const getEmail = () => firebase.auth().currentUser.email;

export default {
  getUid,
  getEmail,
};
