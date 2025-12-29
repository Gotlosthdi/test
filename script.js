import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your specific Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3FSS7VpntotP2jcSTi9dDHDr2bcPlrbU",
  authDomain: "astro-3c018.firebaseapp.com",
  projectId: "astro-3c018",
  storageBucket: "astro-3c018.firebasestorage.app",
  messagingSenderId: "76399040658",
  appId: "1:76399040658:web:5b055bbaca073115cd6e4b",
  measurementId: "G-ZHDH3127FD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Logic to check if you are logged in
onAuthStateChanged(auth, (user) => {
    const adminContent = document.getElementById('admin-content');
    const loginForm = document.getElementById('login-section');

    if (user) {
        // User is signed in, show the dashboard
        adminContent.style.display = 'block';
        loginForm.style.display = 'none';
        loadBookings();
    } else {
        // No user is signed in, show login form
        adminContent.style.display = 'none';
        loginForm.style.display = 'block';
    }
});

// Function to log in
window.login = async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    try {
        await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
        alert("Access Denied: " + error.message);
    }
};
