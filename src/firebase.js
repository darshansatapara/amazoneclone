import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDP5TrAZNmm5JjZ5xGlJcEtKjQPE6_YhsQ",
  authDomain: "e-clone-e697d.firebaseapp.com",
  projectId: "e-clone-e697d",
  storageBucket: "e-clone-e697d.appspot.com",
  messagingSenderId: "66401144796",
  appId: "1:66401144796:web:c435bc82c267a174988919",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
