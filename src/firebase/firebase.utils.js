import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDERRbP2dNuVjwWZKsHveFKU05bMcTv71Y",
    authDomain: "crown-db-1183e.firebaseapp.com",
    projectId: "crown-db-1183e",
    storageBucket: "crown-db-1183e.appspot.com",
    messagingSenderId: "940639257882",
    appId: "1:940639257882:web:d51fddf9c2bded7ef7d8a3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 export const SignInWithGoogle = ()=> auth.signInWithPopup(provider);

 export default firebase;