

//----------------------------------------JUNIOR----------------------------

// global vars 
let currentUser = {}; // the user that online
let juniors_arr = []; // all Juniors users
let currentJunior = {} ; // the corrent Junior that Sign-In
let indexCurrentJunior = 0; // the index and number of juniors that sign-in

//signUp Junior
const signUp_Jounior = e => {
  // get junior data
  let _fullName = document.querySelector('#fullName').value;
  let _email_junior = document.querySelector('#email').value;
  let _password_junior = document.querySelector('#password').value;
  let _jobScope =  document.querySelector('#scopeJob-select').value;
  let _langunge = document.querySelector('#languages-select').value;
  let _jobType = document.querySelector('#typeJob-select').value;
  let _knowledge = document.querySelector('#knowledge-select').value;
  let _jobField = document.querySelector('#jobField-select').value;
  let _locationJob = document.querySelector('#locationJob-select').value;

  //check and convert the item in local to object
   juniors_arr = JSON.parse(localStorage.getItem('juniors_arr')) || [];
   indexCurrentJunior = JSON.parse(localStorage.getItem('indexJunior')) || 0;
   currentJunior = JSON.parse(localStorage.getItem('currentJunior')) || {};

   // check if the userEmail  exist
  let exist = juniors_arr.length && 
      JSON.parse(localStorage.getItem('juniors_arr')).some(data => 
          data.email.toLowerCase() == _email_junior.toLowerCase()  
         
      );


  //if user NOT exist add the user to joniors_arr and save local
  if(!exist){
     juniors_arr.push(
      { 
       User: "Junior",
       Status: "Online", 
       Name: _fullName,
       Email: _email_junior,
       Password: _password_junior,
       JobScope: _jobScope,
       Langunge : _langunge,
       JobType: _jobType,
       Knowledge: _knowledge,
       JobField: _jobField,
       LocationJob: _locationJob
      });

      // save data at local
      localStorage.setItem('juniors_arr', JSON.stringify(juniors_arr));
      currentUser = juniors_arr[indexCurrentJunior];
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      currentJunior = currentUser;
      localStorage.setItem('currentJunior', JSON.stringify(currentJunior));
      console.log(juniors_arr[indexCurrentJunior]);
      indexCurrentJunior+=1;
      localStorage.setItem('indexJunior', JSON.stringify(indexCurrentJunior));
      //-----

      document.querySelector('#signUp-junior-form').reset();
      document.getElementById('fullName').focus();
      alert("נרשמת בהצלחה!");
      window.location.assign("/screens/after-Login/juniorAfterLogin.html"); 
      
    // if the user is exist 
  }
  else{
      alert("משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
  }
  e.preventDefault();
}
//----------------------------------------END JUNIOR----------------------------


//----------------------------------------PRIME---------------------------------
// global vars
let primes_arr = []; // all primes users
let CurrentPrime = {} ; // the corrent Prime that SignUp
let indexCurrentPrime = 0; // the index and number of Primes that sign in

// signUp prime
const signUp_Prime = e => {

  // data prime
  let _companyName = document.querySelector('#companyName').value;
  let _email_prime = document.querySelector('#email_prime').value;
  let _password_prime = document.querySelector('#password_prime').value;

  //check and convert the item in local to object
  primes_arr = JSON.parse(localStorage.getItem('primes_arr')) || [];
  indexCurrentPrime = JSON.parse(localStorage.getItem('indexPrime')) || 0;
  CurrentPrime = JSON.parse(localStorage.getItem('CurrentPrime')) || {};

  // check if the userEmail  exist
  let exist = primes_arr.length && 
    JSON.parse(localStorage.getItem('primes_arr')).some(data => 
      data.email.toLowerCase() == _email_prime.toLowerCase());    
    
  //if user NOT exist add the user to joniors_arr and save local
  if(!exist){
    primes_arr.push(
     {
      User : "Prime",
      Status: "Online", 
      CompanyName: _companyName,
      Email: _email_prime,
      Password: _password_prime,
     });

     // save data at local
     localStorage.setItem('primes_arr', JSON.stringify(primes_arr));
     currentUser = primes_arr[indexCurrentJunior];
     localStorage.setItem('currentUser', JSON.stringify(currentUser));
     CurrentPrime = currentUser;
     localStorage.setItem('CurrentPrime', JSON.stringify(CurrentPrime));
     console.log(primes_arr[indexCurrentPrime]);
     indexCurrentPrime+=1;
     localStorage.setItem('indexPrime', JSON.stringify(indexCurrentPrime));
     //-----

    document.querySelector('#signUp_prime_form').reset();
    document.getElementById('companyName').focus();
    alert("נרשמת בהצלחה!");
    window.location.assign("/screens/after-Login/primeAfterLogIn.html"); 
  } else
  {
    // ERROR - user exist
    alert( "משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
  }
  e.preventDefault();
}




//----------------------------------------END PRIME--------------------------------


//-------------------------------ADMIN-------------------------------------


let admins_arr = []; // all Admin users
let indexCurrentAdmin = 0; // the index and number of Admins
let _emailAdmin;

for (let i = 0; i < 4; i++) {
  if (i == 0){
    _emailAdmin = "omcl97@gmail.com";
  }
  if (i == 1){
    _emailAdmin = "matanka7@gmail.com";
  }
  if (i == 2){
    _emailAdmin = "sahargabay@gmail.com";
  }
  if (i == 3){
    _emailAdmin = "ofekatayak@gmail.com";
  }
  admins_arr.push(
    {
     User : "Admin",
     Status: "Offline", 
     Email: _emailAdmin,
     Password: "123456",
    });
  localStorage.setItem('admins_arr', JSON.stringify(admins_arr));
  console.log(admins_arr[indexCurrentAdmin]);
  indexCurrentAdmin+=1;
  localStorage.setItem('indexAdmin', JSON.stringify(indexCurrentAdmin));
}




//----------------------------------------END ADMIN--------------------------------












//-----------------------------------------another funf-----------------------------

// choose image in signup from file
// function pickImage(input) {    
//     document.querySelector('.logoTxt').innerHTML = '';  // clean logo txt
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = function (e) {
//         $('#imageFile').attr('src', e.target.result).width(100).height(90);
//         console.log(e.target.result);
//       };
      
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

 