import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBg-Iqw9HYUa3uLahdFKSflhAszIGpiSUA",
    authDomain: "crwn-db-f756a.firebaseapp.com",
    databaseURL: "https://crwn-db-f756a.firebaseio.com",
    projectId: "crwn-db-f756a",
    storageBucket: "crwn-db-f756a.appspot.com",
    messagingSenderId: "241769359948",
    appId: "1:241769359948:web:d5bf551017e053901de2e9",
    measurementId: "G-DEN3QB15R0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;