import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_xrLN7ZNKqhP3UkYtzfvNqISzFxJBLcI",
  authDomain: "jivee-f7043.firebaseapp.com",
  projectId: "jivee-f7043",
  storageBucket: "jivee-f7043.appspot.com",
  messagingSenderId: "608660047490",
  appId: "1:608660047490:web:5e89456a308a364eee969b",
  measurementId: "G-D7TV7WNEMR"
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