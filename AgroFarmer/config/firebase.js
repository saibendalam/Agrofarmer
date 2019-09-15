import firebase from "firebase/app"
import "firebase/firestore"
const config = {
    apiKey: "AIzaSyCUUJTCppqgqoHhbydbNmOIWLszLa4cl5A",
    authDomain: "agromarket-fc4cd.firebaseapp.com",
    databaseURL: "https://agromarket-fc4cd.firebaseio.com",
    projectId: "agromarket-fc4cd",
    storageBucket: "agromarket-fc4cd.appspot.com",
    messagingSenderId: "595807655382",
    appId: "1:595807655382:web:b5157b215d348674"
  };
  firebase.initializeApp(config)
  export const firestore = firebase.firestore()
export default firebase