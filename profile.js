// import {
//     getAuth,
//     onAuthStateChanged,
//     sendEmailVerification,
//     updateProfile,
//     signOut,
//   } from "./firebase.js";
  
//   const auth = getAuth();
//   let profilePage = document.getElementById("profile-page");
  
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(user);
  
//       profilePage.innerHTML = `<div class="card mb-4">
//               <div class="card-body">
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <p class="mb-0">Full Name</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">${user.displayName}</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">
//                     Profile pic
//                     <img src="${user.photoURL}"   width="75px" /> 
//                     </p>
//                   </div>
//                 </div>
//                 <hr>
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <p class="mb-0">Email</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">${user.email}</p>
//                   </div>
//                 </div>
//                 <hr>
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <p class="mb-0">Phone</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">(097) 234-5678</p>
//                   </div>
//                 </div>
//                 <hr>
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <p class="mb-0">Mobile</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">(098) 765-4321</p>
//                   </div>
//                 </div>
//                 <hr>
//                 <div class="row">
//                   <div class="col-sm-3">
//                     <p class="mb-0">Address</p>
//                   </div>
//                   <div class="col-sm-9">
//                     <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
//                   </div>
//                    <div class="col-sm-9">
//                     <p class="text-muted mb-0">${
//                       user.emailVerified ? "yes" : "no"
//                     }</p>
//                   </div>
//                 </div>
//               </div>
  
              
//   <button type="button" class="btn btn-success" id="verifyEmail">Verify your email</button>
//             </div>
//             <button type="button" class="btn btn-success" id="updateProfile">Update profile</button>
//              <button type="button" class="btn btn-success" id="signOut">Sign Out</button>
//             </div>`;
  
//       //   verifyEmail
//       document.getElementById("verifyEmail").addEventListener("click", () => {
//         sendEmailVerification(auth.currentUser).then(() => {
//           console.log("email has been sent");
//         });
//       });
  
//       //   update profile
  
//       document.getElementById("updateProfile").addEventListener("click", () => {
//         updateProfile(auth.currentUser, {
//           displayName: "Saylani",
//           photoURL:
//             "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png",
//         })
//           .then(() => {
//             console.log("update");
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
  
  
//       // sigh out 
//       document.getElementById("signOut").addEventListener("click", () => {
//           signOut(auth).then(() => {
//               console.log("user has been signed out");
  
              
//             }).catch((error) => {
//               console.log(error);
              
//             });
//         });
  
//     } else {
//       console.log("user is logout out");
//     }
//   });


import {
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    updateProfile,
    signOut,
} from "./firebase.js";

const auth = getAuth();
let profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(user);

        profilePage.innerHTML = `
            <div class="card mb-4" style="max-width: 600px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <div class="card-body">
                    <h3 class="text-center">User Profile</h3>
                    <div class="text-center mb-3">
                        <img src="${user.photoURL || 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png'}" width="100px" class="rounded-circle" alt="Profile Picture" />
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0 font-weight-bold">Full Name</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${user.displayName || 'N/A'}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0 font-weight-bold">Email</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${user.email}</p>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                            <p class="mb-0 font-weight-bold">Email Verified</p>
                        </div>
                        <div class="col-sm-9">
                            <p class="text-muted mb-0">${user.emailVerified ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <button type="button" class="btn btn-primary m-2" id="verifyEmail">Verify Email</button>
                    <button type="button" class="btn btn-warning m-2" id="updateProfile">Update Profile</button>
                    <button type="button" class="btn btn-danger m-2" id="signOut">Sign Out</button>
                </div>
            </div>
        `;

        // Verify Email
        document.getElementById("verifyEmail").addEventListener("click", () => {
            sendEmailVerification(auth.currentUser).then(() => {
                console.log("Verification email sent.");
                alert("Verification email sent to " + user.email);
            }).catch((error) => {
                console.error("Error sending verification email:", error);
            });
        });

        // Update Profile
        document.getElementById("updateProfile").addEventListener("click", () => {
            updateProfile(auth.currentUser, {
                displayName: "Saylani",
                photoURL: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png",
            }).then(() => {
                console.log("Profile updated.");
                alert("Profile updated successfully!");
                location.reload(); // Reload page to show updated info
            }).catch((error) => {
                console.error("Error updating profile:", error);
            });
        });

        // Sign Out
        document.getElementById("signOut").addEventListener("click", () => {
            signOut(auth).then(() => {
                console.log("User signed out.");
                alert("You have signed out.");
                window.location.href = "/login"; // Redirect to login page
            }).catch((error) => {
                console.error("Error signing out:", error);
            });
        });

    } else {
        console.log("No user is logged in.");
        profilePage.innerHTML = "<p class='text-center'>Please log in to view your profile.</p>";
    }
});
