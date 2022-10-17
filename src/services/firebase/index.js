import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTZztiEZAU2PVDPT9-5aPxTke0RPYyOkM",
  authDomain: "sos-tu-magia-backend.firebaseapp.com",
  projectId: "sos-tu-magia-backend",
  storageBucket: "sos-tu-magia-backend.appspot.com",
  messagingSenderId: "774807208564",
  appId: "1:774807208564:web:04c467d2323bc8de1a8721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
