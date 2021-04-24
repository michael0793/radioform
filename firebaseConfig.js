import firebase from 'firebase';
import firestore from '@react-native-firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDH9aKJlKDQn2clW06Jhb6gulxbvX-YvWY",
    authDomain: "capsproj-b66fa.firebaseapp.com",
    projectId: "capsproj-b66fa",
    storageBucket: "capsproj-b66fa.appspot.com",
    messagingSenderId: "344512882019",
    appId: "1:344512882019:web:5ac0fba7fa6ba536309f56",
    measurementId: "G-EXBQQ5Y8JD"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  export const VotesRef = db.collection(datachain)

  export {firebase};