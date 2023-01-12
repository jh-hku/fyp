import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBUPMkxgw1GDcksBBrN8Np0MH2JmMMvJJQ",
    authDomain: "fyp2022-437ea.firebaseapp.com",
    projectId: "fyp2022-437ea",
    storageBucket: "fyp2022-437ea.appspot.com",
    messagingSenderId: "161431556011",
    appId: "1:161431556011:web:2410c223671af11a378cee",
    measurementId: "G-VX06D4JXWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default app;