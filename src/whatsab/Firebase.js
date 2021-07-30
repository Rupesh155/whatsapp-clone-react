import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDWBaoHvXF1YnsRd8eIYRcugumZk5d7md0",
    authDomain: "whats-app-clone-2c491.firebaseapp.com",
    projectId: "whats-app-clone-2c491",
    storageBucket: "whats-app-clone-2c491.appspot.com",
    messagingSenderId: "718206115413",
    appId: "1:718206115413:web:c69388fa7f61801bd27edc",
    measurementId: "G-N8XN0JFB4D"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export { auth ,provider};
  export default db;