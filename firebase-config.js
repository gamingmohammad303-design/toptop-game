// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfrFkglZShCuZhCYwNQ8pEmKwNppWggBU",
  authDomain: "toptop-game-4e89f.firebaseapp.com",
  projectId: "toptop-game-4e89f",
  storageBucket: "toptop-game-4e89f.firebasestorage.app",
  messagingSenderId: "786973684229",
  appId: "1:786973684229:web:a327a180f44ca18f8fa26c",
  measurementId: "G-S6ERB47WJ8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// بەستنەوە بە window بۆ ئەوەی لە فایلەکانی تریشدا بەکاربێت
window.db = db;
window.firestoreFns = { doc, setDoc, getDoc, updateDoc, collection, getDocs };
