import firebase from "firebase"



const firebaseConfig = {
    apiKey: "YOURR KEY HERE",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASEURL HERE",
    projectId: "YOUR PROJECT ID HERE",
    storageBucket: "YOUR STORAGEbUCKET HERE",
    messagingSenderId: "MESSAGING SENDER ID HERE",
    appId: "YOUR APP ID HERE"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };