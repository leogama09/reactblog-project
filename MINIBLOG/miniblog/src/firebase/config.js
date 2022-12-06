import { initializeApp } from "firebase/app"

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDH0oQs3cQwO4sEFCwSI-j6asLy3HS0HqE",
  authDomain: "miniblog2-feab0.firebaseapp.com",
  projectId: "miniblog2-feab0",
  storageBucket: "miniblog2-feab0.appspot.com",
  messagingSenderId: "698369215424",
  appId: "1:698369215424:web:739f4d06ee801af7205625"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }