import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-firebase-todo-app-3e640.firebaseapp.com",
    projectId: "react-firebase-todo-app-3e640",
    storageBucket: "react-firebase-todo-app-3e640.appspot.com",
    messagingSenderId: "917247438699",
    appId: "1:917247438699:web:4116f1929ffa7658a2262e"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
const colRef = collection(db, "todos")

export default colRef;