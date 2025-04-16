// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpyAIoZIhPEJhiiGq_m7QZl6oi-hTgluk",
    authDomain: "blog-app-82211.firebaseapp.com",
    projectId: "blog-app-82211",
    storageBucket: "blog-app-82211.firebasestorage.app",
    messagingSenderId: "169117967849",
    appId: "1:169117967849:web:4f46084bea4faf80b21778",
    measurementId: "G-CZHYYS8PTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const analytics = getAnalytics(app);

export default auth