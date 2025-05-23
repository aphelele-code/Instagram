 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWHarLpQThFaupu6EBiIT45OnHUa9Cf58",
    authDomain: "instagram-clone-4c57e.firebaseapp.com",
    projectId: "instagram-clone-4c57e",
    storageBucket: "instagram-clone-4c57e.appspot.com",
    messagingSenderId: "92797389818",
    appId: "1:92797389818:web:e8fd81a59a740ffabdf243",
    measurementId: "G-Q72V1761WM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

 

const password = document.getElementById("password");
const sign = document.getElementById("su-button");
const message = document.getElementById("message");
const email = document.getElementById("email");
const auth = getAuth(app);

sign.addEventListener("click", function (e) {
  e.preventDefault();
  message.textContent = "";

  if (!email.value || !password.value) {
    alert("Please fill out all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log("Signed up:", userCredential.user.email);
      alert("Account created successfully!");
    })
    .catch((error) => {
      alert("Couldn't sign you up: " + error.message);
    });
});


const login = document.getElementById("log-part");
const signup = document.getElementById("su-part");
const loginButton = document.getElementById("login2");
const signupButton = document.getElementById("sign-up")

if(login.style.display = "flex"){
   signup.style.display = "none"
}
if(signup.style.display ="flex"){
  login.style.display = "none"
}

loginButton.addEventListener("click" , function () {
  login.style.display = "flex"
  signup.style.display = "none"

})

signupButton.addEventListener("click", function(){
  signup.style.display = "flex"
  login.style.display = "none"
})

const loginBtn = document.getElementById("loginBtn"); // Make sure your HTML has this id!
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginMessage = document.getElementById("login-message");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!loginEmail.value || !loginPassword.value) {
    alert("Please fill out all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      console.log("Logged in:", userCredential.user.email);
      loginMessage.textContent = "Login successful!";
      window.location.href = "home.html";
    })
    .catch((error) => {
  if (error.code === "auth/email-already-in-use") {
    message.textContent = "Email already in use. Please log in instead.";
  } else {
    message.textContent = "Couldn't sign you up: " + error.message;
  }
});
})

