
import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";
  
const auth = getAuth();

let signUp =() => {

  let signupEmail = document.getElementById("email")
  let signupPassword = document.getElementById("password");

  if (signupEmail.value === "" || signupPassword.value === "") {
      
    // sweet alert
    Swal.fire({
      icon: "warning",
      title: "Warning",
      text: "Please fill all fields before submitting!"
  });
}

  createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
  .then((res) => {
    const user = res.user;
    console.log("user", res.user);
            // sweet alert
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              }
            });
            Toast.fire({
              icon: "success",
              title: "Signed up successfully"
            });
    setTimeout(() => {
      location.href = "signin.html";
  }, 2000);
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error code:", errorCode);
     
    if (errorCode === "auth/email-already-in-use") {
    
      Swal.fire({
        title: "Email Already Exists",
        text: "Please sign in instead.",
        icon: "error"
      })
    } else if (errorCode === "auth/weak-password") {
      Swal.fire({
        title: "Incorrect Password",
        text: "The password should be at least 6 characters long.",
        icon: "error"
      });
    } else{
      Swal.fire({
      title: "Invalid email ",
      text: "try again",
      icon: "error",
    });
  }
});

signupEmail.value = "";
signupPassword.value = "";

};

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signUp);








