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
    getDocs,
    where
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAfo-bpp0mZqq0BecnQo7yKrmEg5VKzPHY",
    authDomain: "checklista-d39c0.firebaseapp.com",
    projectId: "checklista-d39c0",
    storageBucket: "checklista-d39c0.firebasestorage.app",
    messagingSenderId: "1077383270775",
    appId: "1:1077383270775:web:c0e49a0d7de410bf11d172"
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
    getDocs,
    where
};