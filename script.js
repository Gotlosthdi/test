import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA3FSS7VpntotP2jcStI9dDHDr2bCPlrbU",
  authDomain: "astro-3c018.firebaseapp.com",
  projectId: "astro-3c018",
  storageBucket: "astro-3c018.firebasestorage.app",
  messagingSenderId: "76399040658",
  appId: "1:76399040658:web:3451d96a770c918acd6e4b",
  measurementId: "G-EX1V5ZG5VZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle Booking Form
document.getElementById('booking-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const bookingData = {
        customerName: e.target[0].value,
        carModel: e.target[1].value,
        phone: e.target[2].value,
        date: e.target[3].value,
        package: document.getElementById('film-name').innerText,
        status: "New Inquiry",
        createdAt: serverTimestamp()
    };

    try {
        await addDoc(collection(db, "bookings"), bookingData);
        alert("Booking Sent to Astro Detailing! We will call you shortly.");
        e.target.reset();
    } catch (error) {
        console.error("Error: ", error);
    }
});
