import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebase config.js"


const form = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


form.addEventListener('submit'  , (event)=>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorMessage)
  });

})