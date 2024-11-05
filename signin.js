
// import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

// const auth = getAuth();
// let signinEmail = document.getElementById("loginEmail");
// let signinPassword = document.getElementById("loginPassword");

// let signinBtn = document.getElementById("loginBtn");


// signinBtn.addEventListener("click", () => {
//     if (signinEmail.value.trim() && signinPassword.value.trim()) {
//         signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
//             .then((userCredential) => {
//                 // console.log("Signed-in user:", userCredential.user);

//                 // sweet alert
        
//         Swal.fire({
//             title: "Congratulation",
//             text: "Sign in successfully",
//             icon: "success"
//           });
//                 setTimeout(() => {
//                     location.href = "profile.html";
//                 }, 1000);
                
               
//             })
//             .catch((error) => {
//                 // console.log("Sign-in error:", error.message);
//                       // sweet alert
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Password",
//         text: "Please try again!"
//     });
         
//             });
//     } else {
//         // console.log("Please enter both email and password.");
//                 // sweet alert
//                 Swal.fire({
//                     icon: "warning",
//                     title: "Warning",
//                     text: "Please fill all fields before submitting!"
//                 });
//     }
// });

import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();
let signinEmail = document.getElementById("loginEmail");
let signinPassword = document.getElementById("loginPassword");
let signinBtn = document.getElementById("loginBtn");

signinBtn.addEventListener("click", () => {
    // Check if email and password fields are not empty
    if (signinEmail.value.trim() && signinPassword.value.trim()) {
        signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
            .then((userCredential) => {
                // Successful sign-in
                Swal.fire({
                    title: "Congratulations",
                    text: "Signed in successfully",
                    icon: "success",
                });
                
                // Redirect to profile page after a short delay
                setTimeout(() => {
                    location.href = "profile.html";
                }, 1000);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log("Error code:", errorCode);

                // Check for specific sign-in error codes
                if (errorCode === "auth/user-not-found") {
                    // Show alert if email is not found
                    Swal.fire({
                        icon: "error",
                        title: "Email Not Found",
                        text: "The email you entered does not match any account. Please try again or sign up.",
                    });
                } else if (errorCode === "auth/weak-password") {
                    // Show alert if password is incorrect
                    Swal.fire({
                        icon: "error",
                        title: "Invalid Password",
                        text: "The password you entered is incorrect. Please try again!",
                    });
                } else {
                    // Show a general error alert for other cases
                    Swal.fire({
                        icon: "error",
                        title: "Invalid Email",
                        text: "The email you entered is incorrect. Please try again!",
                    });
                }
            });
    } else {
        // Show warning alert if fields are empty
        Swal.fire({
            icon: "warning",
            title: "Warning",
            text: "Please fill all fields before submitting!",
        });
    }
});
