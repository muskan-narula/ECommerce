import firebase from 'firebase'
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyA7SnlYeARYYE5c93_Yj5oc1AQSZfvePak",
    authDomain: "clone-3a47b.firebaseapp.com",
    databaseURL: "https://clone-3a47b.firebaseio.com",
    projectId: "clone-3a47b",
    storageBucket: "clone-3a47b.appspot.com",
    messagingSenderId: "93551011407",
    appId: "1:93551011407:web:53223d5c633be8e209ec3a"
});
 const db = firebaseApp.firestore();
 const auth =firebase.auth();
  export {db,auth};