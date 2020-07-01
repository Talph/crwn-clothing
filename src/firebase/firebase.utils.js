import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATuHLNtK0ZupizwyqG1znIx2DXbqGanRQ",
    authDomain: "crwn-db-203fa.firebaseapp.com",
    databaseURL: "https://crwn-db-203fa.firebaseio.com",
    projectId: "crwn-db-203fa",
    storageBucket: "crwn-db-203fa.appspot.com",
    messagingSenderId: "576110239768",
    appId: "1:576110239768:web:53e7cc50f59d74ee0be36d",
    measurementId: "G-Y8FWQV0CTK"
  };

  export const createUserProfileDocument = async (userAuth, addictionalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        console.log(userAuth);

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addictionalData
            })

        } catch (error){
            console.log('error creating user', error.message);
        }

    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;