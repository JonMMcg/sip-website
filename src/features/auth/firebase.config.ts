import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeAUDYH6YwFsAISk9_Knp1h1budGPhEDo",
  authDomain: "project-tittle-tattle-429701.firebaseapp.com",
  projectId: "project-tittle-tattle-429701",
  storageBucket: "project-tittle-tattle-429701.appspot.com",
  messagingSenderId: "238702151899",
  appId: "1:238702151899:web:bbc312f4b7e9c1934e64fe",
  measurementId: "G-CLGWN59DFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;