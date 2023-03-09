import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOs8PxE3Nf1_vjDAR9ALl1Rn5VOoaDHGw",
  authDomain: "craftsmanship-dcb58.firebaseapp.com",
  projectId: "craftsmanship-dcb58",
  storageBucket: "craftsmanship-dcb58.appspot.com",
  messagingSenderId: "298670854137",
  appId: "1:298670854137:web:6237953be3422066a2f728",
  measurementId: "G-RS40Z678BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
