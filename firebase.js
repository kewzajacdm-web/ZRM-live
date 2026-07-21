import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "TWOJE_API_KEY",
    authDomain: "checklista-d39c0.firebaseapp.com",
    projectId: "checklista-d39c0",
    storageBucket: "checklista-d39c0.firebasestorage.app",
    messagingSenderId: "1077383270775",
    appId: "TWOJE_APP_ID"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    getDocs
};