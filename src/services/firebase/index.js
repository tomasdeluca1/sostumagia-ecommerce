import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTZztiEZAU2PVDPT9-5aPxTke0RPYyOkM,", //process.env.REACT_APP_apiKey,
  authDomain: "sos-tu-magia-backend.firebaseapp.com", //process.env.REACT_APP_authDomain,
  projectId: "sos-tu-magia-backend", // process.env.REACT_APP_projectId,
  storageBucket: "sos-tu-magia-backend.appspot.com", // process.env.REACT_APP_storageBucket,
  messagingSenderId: "774807208564", //process.env.REACT_APP_messagingSenderId,
  appId: "1:774807208564:web:04c467d2323bc8de1a8721", //process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
