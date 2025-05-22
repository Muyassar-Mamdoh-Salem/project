// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalUgJ3Ll3tkHQAQvJdORNeafACY-ek9w",
  authDomain: "ecommerce-app-6b6cb.firebaseapp.com",
  projectId: "ecommerce-app-6b6cb",
  storageBucket: "ecommerce-app-6b6cb.firebasestorage.app",
  messagingSenderId: "415824190073",
  appId: "1:415824190073:web:a47d569907d09dda5392a8",
  measurementId: "G-PF1PYRJ45L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;