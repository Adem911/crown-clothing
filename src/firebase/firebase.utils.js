import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAc4Ke9EuSeZY1_wjZuxIK1bB5CsWiu75Q",
  authDomain: "crown-db-57a46.firebaseapp.com",
  databaseURL: "https://crown-db-57a46.firebaseio.com",
  projectId: "crown-db-57a46",
  storageBucket: "crown-db-57a46.appspot.com",
  messagingSenderId: "175210773054",
  appId: "1:175210773054:web:31704ed509a4a2e00fef6f",
  measurementId: "G-LJK3B3CH1Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
