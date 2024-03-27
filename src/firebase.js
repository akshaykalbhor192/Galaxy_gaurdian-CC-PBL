import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA62fxj5qT7RYzuj1wIyzNg_wClCnPIsgk",
  authDomain: "gallerygaurdian.firebaseapp.com",
  projectId: "gallerygaurdian",
  storageBucket: "gallerygaurdian.appspot.com",
  messagingSenderId: "148645339936",
  appId: "1:148645339936:web:7277620a0a60ea3e862d45",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
