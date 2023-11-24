import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt0OFR9KnUE5JD1ZWO6n4ZiW6FZlWUac0",
  authDomain: "nwitter-reloaded-20a70.firebaseapp.com",
  projectId: "nwitter-reloaded-20a70",
  storageBucket: "nwitter-reloaded-20a70.appspot.com",
  messagingSenderId: "62567053393",
  appId: "1:62567053393:web:faccd409d656e3b1fbe070"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);