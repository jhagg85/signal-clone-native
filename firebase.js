import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPq0caxhY4g8sCPeON5mJbDg9jDsbEGpI",
  authDomain: "signal-clone-native-1b326.firebaseapp.com",
  projectId: "signal-clone-native-1b326",
  storageBucket: "signal-clone-native-1b326.appspot.com",
  messagingSenderId: "947467292110",
  appId: "1:947467292110:web:3e3d8806ffee70cb5caf9f",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
