
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection,addDoc,updateDoc,deleteDoc,deleteField } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {getAuth,onAuthStateChanged, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCYZ9IilLKt4bZUOid185CDfwzuYMDv6yE",
  authDomain: "junior-3c64f.firebaseapp.com",
  projectId: "junior-3c64f",
  storageBucket: "junior-3c64f.appspot.com",
  messagingSenderId: "1003928300183",
  appId: "1:1003928300183:web:ed8b6aa96a339a048257d2"
});

const auth = getAuth();
const db = getFirestore(firebaseApp);



// check if user logged in or not
auth.onAuthStateChanged(user =>{
  if (user)
  {
    console.log('logged in!');
    
  }else{
    console.log('No user!');
  }
 }) 

 //////////---Junior Sign Up-----///////
 if (window.location.href == "http://127.0.0.1:5500/screens/register/register_junior.html"){
// --------- when Junior SIGN UP - on click sumbmit ------
  let signForm = document.querySelector('#signUp-junior-form');
  signForm.addEventListener('submit',(e)=>{
    e.preventDefault();

        //get Junior info
    let _fullName = signForm['fullName'].value;
    let _email = signForm['email'].value;
    let _password = signForm['password'].value;
    let _scopeJob = signForm['scopeJob-select'].value;
    let _typeJob = signForm['typeJob-select'].value;
    let _knowledge = signForm['knowledge-select'].value;
    let _jobField = signForm['jobField-select'].value;
    let _locationJob = signForm['locationJob-select'].value;
    let _languages = signForm['languages-select'].value;


 // func ADDING Ducument to firebase (junior data)
 async function AddDuc_AutoID()
 {
    var ref = collection(db,"juniors");
    const docRef = await addDoc(ref,
    {
      name: _fullName,
      email: _email,
      password :_password,
      language:_languages,
      scopeJob: _scopeJob,
      typeJob: _typeJob,
      knowledge: _knowledge,
      jobField: _jobField,
      locationJob: _locationJob
    })
  .catch((error)=>{
    alert("Unsuccessful error"+error);
  })  
}
    //user sign up
    createUserWithEmailAndPassword(auth, _email, _password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        // ADDING Ducument
        AddDuc_AutoID().then(() => {
        alert('נרשמת בהצלחה!');
        window.location.assign("../../screens/home.html");
        }) 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
})
}
 //////////---Prime Sign Up-----///////
if (window.location.href == "http://127.0.0.1:5500/screens/register/register_prime.html"){

// Prime form
let signPrForm = document.querySelector('#signUp-prime-form');
// --------- when Prime SIGN UP - on click sumbmit ------
signPrForm.addEventListener('submit',(e)=>{
    e.preventDefault();

        //get Prime info
    let company = signPrForm['company'].value;
    let email = signPrForm['email'].value;
    let password = signPrForm['password'].value;

 // func ADDING Ducument to firebase (prime data)
 async function AddDuc_AutoID_PRIME()
 {
    var ref = collection(db,"primes");
    const docRef = await addDoc(ref,
    {
      company: company,
      email: email,
      password :password,
    })
  .catch((error)=>{
    alert("Unsuccessful error"+error);
  })  
}
    //user sign up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        // ADDING Ducument
        AddDuc_AutoID_PRIME().then(() => {
        alert('נרשמת בהצלחה!');
        window.location.assign("../../screens/home.html");
        }) 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
})
}

// ------Junior Log In------
if (window.location.href == "http://127.0.0.1:5500/screens/home.html"){
const loginForm = document.querySelector('#login-form');
console.log('log!!');
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
 
  // get user info
  let email = loginForm['login-email'].value;
  let password = loginForm['login-password'].value;  
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('התחברת בהצלחה!');
    loginForm.reset();
    window.location.assign("../../screens/home.html");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
 
})
}





