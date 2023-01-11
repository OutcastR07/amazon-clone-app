// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiF_hKsK0gf-TCAKSb5JmF-iGqtihuaLc",
    authDomain: "personal-ecommerce-website.firebaseapp.com",
    projectId: "personal-ecommerce-website",
    storageBucket: "personal-ecommerce-website.appspot.com",
    messagingSenderId: "1051431433974",
    appId: "1:1051431433974:web:23c18149f75363bcf85ed7",
    measurementId: "G-C976829VYP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };