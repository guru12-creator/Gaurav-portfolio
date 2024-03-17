
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmMcrlMyO2zFclusxSzwXAwFU1f4RYtX8",
  authDomain: "gaurav-portfolio-18ff5.firebaseapp.com",
  projectId: "gaurav-portfolio-18ff5",
  storageBucket: "gaurav-portfolio-18ff5.appspot.com",
  messagingSenderId: "229942466885",
  appId: "1:229942466885:web:967255d64bab56962c862c"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();