import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyA7B18m_wd3Z8yRzkdjfc1nHZqXtxAAk4w",
  authDomain: "c71hw-4c3d0.firebaseapp.com",
  projectId: "c71hw-4c3d0",
  storageBucket: "c71hw-4c3d0.appspot.com",
  messagingSenderId: "11824883487",
  appId: "1:11824883487:web:d835c1f9b3401751a2722a"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

