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
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = ( collections ) => {
    const transformedCollection = collections.docs.map(doc  => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    },{})

};

export const getCurrentUser = () =>{
    return new Promise((resolve, reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;