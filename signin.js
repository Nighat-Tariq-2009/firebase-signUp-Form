// import { signInWithEmailAndPassword, getAuth } from "./firebase.js"

// const auth = getAuth();

// // const signIn = () => {


// // }
// let signinEmail = document.getElementById("loginEmail");
// let signinPassword = document.getElementById("loginPassword");

// let signinBtn = document.getElementById("loginBtn")

// signinBtn.addEventListener("click", () => {
//     if(signinEmail.value.trim() && signinPassword.value.trim()){
//         signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user)
  
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
   
//   });

//     }
//     else{
//         console.log("insert your data")

//     }
//     location.href = "signin.html"
// })

// signinBtn.addEventListener("click", () => {
//     if (signinEmail.value.trim() && signinPassword.value.trim()) {
//         signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log("Signed in user:", user);
//             setTimeout(() => {
//                 location.href = "dashboard.html";
//             }, 1000); // 1-second delay
//         })
//             .catch((error) => {
//                 console.log("Sign-in error:", error.message);
//             });
//     } else {
//         console.log("Please enter both email and password.");
//     }
// });
import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();
let signinEmail = document.getElementById("loginEmail");
let signinPassword = document.getElementById("loginPassword");

let signinBtn = document.getElementById("loginBtn");
signinBtn.addEventListener("click", () => {
    if (signinEmail.value.trim() && signinPassword.value.trim()) {
        signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
            .then((userCredential) => {
                console.log("Signed-in user:", userCredential.user);
                setTimeout(() => {
                    location.href = "dashboard.html";
                }, 1000);
            })
            .catch((error) => {
                console.log("Sign-in error:", error.message);
         
            });
    } else {
        // console.log("Please enter both email and password.");
                // sweet alert
                Swal.fire({
                    icon: "warning",
                    title: "Warning",
                    text: "Please fill all fields before submitting!"
                });
    }
});
