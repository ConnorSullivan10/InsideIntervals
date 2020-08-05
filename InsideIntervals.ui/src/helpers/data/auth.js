import firebase from 'firebase';
// import axios from 'axios';

// interceptors work by changing the outbound request before the xhr is sent
// or by changing the response before it's returned to our .then() method.
// axios.interceptors.request.use((request) => {
//   const token = sessionStorage.getItem('token');

//   if (token != null) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }

//   return request;
// }, (err) => Promise.reject(err));

const getUid = () => firebase.auth().currentUser.uid;

const getEmail = () => firebase.auth().currentUser.email;

export default {
  getUid,
  getEmail,
};
