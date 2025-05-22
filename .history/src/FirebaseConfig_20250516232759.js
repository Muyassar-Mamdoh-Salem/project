// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAalUgJ3Ll3tkHQAQvJdORNeafACY-ek9w",
  authDomain: "ecommerce-app-6b6cb.firebaseapp.com",
  projectId: "ecommerce-app-6b6cb",
  storageBucket: "ecommerce-app-6b6cb.appspot.com", // ← تم التصحيح هنا
  messagingSenderId: "415824190073",
  appId: "1:415824190073:web:a47d569907d09dda5392a8",
  measurementId: "G-PF1PYRJ45L"
};

const app = initializeApp(firebaseConfig);
export default app;
