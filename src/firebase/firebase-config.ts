// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBK1hBLrf6QyRoXIZ0e49uIP2iH-Z0xt8Y',
    authDomain: 'monkey-blogging-9a3b0.firebaseapp.com',
    projectId: 'monkey-blogging-9a3b0',
    storageBucket: 'monkey-blogging-9a3b0.appspot.com',
    messagingSenderId: '643470045155',
    appId: '1:643470045155:web:4e03e56af805904325fad6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
