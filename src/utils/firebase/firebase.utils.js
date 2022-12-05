import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPrOQPVbiugPwvXXVK_kxQBDnODll3y54",
    authDomain: "crwn-clothing-db-471ed.firebaseapp.com",
    projectId: "crwn-clothing-db-471ed",
    storageBucket: "crwn-clothing-db-471ed.appspot.com",
    messagingSenderId: "1095618274552",
    appId: "1:1095618274552:web:219493699cd3cb20b5070d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userRef);
}
