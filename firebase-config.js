// KONFIGURASI FIREBASE UNIFIED
const firebaseConfig = {
    apiKey: "AIzaSyC73l7zgnN4lAtXmYGY-7KpER8_h0QZMg8",
    authDomain: "koperasi-asmara-tani.firebaseapp.com",
    projectId: "koperasi-asmara-tani",
    storageBucket: "koperasi-asmara-tani.firebasestorage.app",
    messagingSenderId: "378910307691",
    appId: "1:378910307691:web:16ba94c7de9fd77c4e56c1",
    measurementId: "G-TQQ3P3YSYE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log('✅ Firebase initialized for Tabungan Digital');
