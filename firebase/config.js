import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAFP2ugTI-cB7U6_Hw6O4EOO2aZeD5KBOw",
  authDomain: "nuxt-f6-2ndproject.firebaseapp.com",
  databaseURL: "https://nuxt-f6-2ndproject-default-rtdb.firebaseio.com",
  projectId: "nuxt-f6-2ndproject",
  storageBucket: "nuxt-f6-2ndproject.appspot.com",
  messagingSenderId: "173137223590",
  appId: "1:173137223590:web:687e6d6441b71f7552b967",
  measurementId: "G-QRP0MZVB35"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;