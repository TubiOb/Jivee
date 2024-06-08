import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBooXUmcodCYK_3rkcIlpCG8NhNDhZkEtA",
  authDomain: "jivee-55f65.firebaseapp.com",
  projectId: "jivee-55f65",
  storageBucket: "jivee-55f65.appspot.com",
  messagingSenderId: "682617877616",
  appId: "1:682617877616:web:85f8564bfac807c663f0b5",
  measurementId: "G-WEDKR2EBL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const GoogleUser = new GoogleAuthProvider();
const FacebookUser = new FacebookAuthProvider();
const database = getDatabase(app);

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is logged in');
    } else {
      console.log('User is logged out');
    }
});

export { app, analytics, auth, firestore, storage, onAuthStateChanged, GoogleUser, FacebookUser, database };