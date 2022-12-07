
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, collection,addDoc,updateDoc,deleteDoc,deleteField } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';


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



// check if user logged in
onload = onAuthStateChanged(auth,user =>{
  if (user != null)
  {
    
    console.log('logged in!');
    
  }else{
    console.log('No user!');
  }
 }) 



   

 // form
 let signForm = document.querySelector('#signUp-junior-form');
 
// --------- when user SIGN IN - on click sumbmit ------
signForm.addEventListener('submit',(e)=>{
    e.preventDefault();


        //get user info
    let _fullName = signForm['fullName'].value;
    let _email = signForm['email'].value;
    let _password = signForm['password'].value;
    let _scopeJob = signForm['scopeJob-select'].value;
    let _typeJob = signForm['typeJob-select'].value;
    let _knowledge = signForm['knowledge-select'].value;
    let _jobField = signForm['jobField-select'].value;
    let _locationJob = signForm['locationJob-select'].value;
    let _languages = signForm['languages-select'].value;


 // func ADDING Ducument to firebase (user data)
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
  .then(()=>{
    alert("data added");
  })
  .catch((error)=>{
    alert("Unsuccessful error"+error);
  })
   
}

    //user sign in
    createUserWithEmailAndPassword(auth, _email, _password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ADDING Ducument
         AddDuc_AutoID();
        alert('user sign in!');
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });


})





