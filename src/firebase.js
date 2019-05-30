import firebase from 'firebase';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSIo-hy2Tj1YsPOERpkfGIr42igt6XvY4",
  authDomain: "ahornspeck-app.firebaseapp.com",
  databaseURL: "https://ahornspeck-app.firebaseio.com",
  projectId: "ahornspeck-app",
  storageBucket: "ahornspeck-app.appspot.com",
  messagingSenderId: "509423607111",
  appId: "1:509423607111:web:0c79ecd1845365a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;