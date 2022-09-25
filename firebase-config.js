import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHsNYscQqjbeylr_sszD2migkYhxNOliQ",
  authDomain: "kjhgvsg.firebaseapp.com",
  projectId: "kjhgvsg",
  storageBucket: "kjhgvsg.appspot.com",
  messagingSenderId: "826062500812",
  appId: "1:826062500812:web:89126cd4e1e4e74adca369",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
