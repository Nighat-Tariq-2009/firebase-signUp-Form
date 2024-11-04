
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    signOut,
   } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
   
        apiKey: "AIzaSyB8qX26YgnnpbNesK7hQqqYjfzt5faRrFo",
        authDomain: "signup-authentication-69f80.firebaseapp.com",
        projectId: "signup-authentication-69f80",
        storageBucket: "signup-authentication-69f80.firebasestorage.app",
        messagingSenderId: "504162393107",
        appId: "1:504162393107:web:0f974acb2494efb0a133e6",
        measurementId: "G-21ZNL4J00K"
      
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


   const auth = getAuth(app);

export {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    signOut,} 