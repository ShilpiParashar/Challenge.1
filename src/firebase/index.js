import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDL5uAUa_rTWLR1Kfs210wjW6rVixrxtMw",
  authDomain: "booksbud-3fc30.firebaseapp.com",
  databaseURL: "https://booksbud-3fc30-default-rtdb.firebaseio.com",
  projectId: "booksbud-3fc30",
  storageBucket: "booksbud-3fc30.appspot.com",
  messagingSenderId: "70934747055",
  appId: "1:70934747055:web:9b438b6994226d4ad1c15a",
  measurementId: "G-CB5DL05S8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
