
import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";
  
const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//     console.log("user", user)
  
//   } else {
//     console.log("user not exist")

//   }
// });


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
    setTimeout(() => {
      location.href = "signin.html";
  }, 2000);
    
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error",error)

 
});

};

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signUp);








