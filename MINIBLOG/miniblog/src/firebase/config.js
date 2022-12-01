import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCVe9I89un0xRU9ljAC1DCANG-uwOfHen0",
  authDomain: "miniblog-5a546.firebaseapp.com",
  projectId: "miniblog-5a546",
  storageBucket: "miniblog-5a546.appspot.com",
  messagingSenderId: "303219296110",
  appId: "1:303219296110:web:fb780a2912ba1f3348a37f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }