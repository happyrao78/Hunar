
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrwnwHpTP9v6ajijsHIGtEvIAppoR4oR0",
  authDomain: "hunar-8f29c.firebaseapp.com",
  projectId: "hunar-8f29c",
  storageBucket: "hunar-8f29c.appspot.com",
  messagingSenderId: "58277786750",
  appId: "1:58277786750:web:1e280e0c238f55a155d42f",
  measurementId: "G-JLJR8WPWM1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
