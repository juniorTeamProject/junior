

//----------------------------------------JUNIOR----------------------------

// global vars 
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
   currentJunior = JSON.parse(localStorage.getItem('coorrentJunior')) || {};

   // check if the userEmail  exist
   let exist = (juniors_arr.length && 
    JSON.parse(localStorage.getItem('juniors_arr')).some(data => data.email.toLowerCase() == email)
    || (primes_arr.length && JSON.parse(localStorage.getItem('primes_arr')).some(data => data.email.toLowerCase() == email);
  //if user NOT exist add the user to joniors_arr and save local
  if(!exist){
     juniors_arr.push(
      { 
       name: _fullName,
       email: _email_junior,
       password: _password_junior,
       jobScope: _jobScope,
       langunge : _langunge,
       jobType: _jobType,
       knowledge: _knowledge,
       jobField: _jobField,
       locationJob: _locationJob
      });

      // save data at local
      localStorage.setItem('juniors_arr', JSON.stringify(juniors_arr));
      currentJunior = juniors_arr[indexCurrentJunior];
      localStorage.setItem('coorrentJunior', JSON.stringify(currentJunior));
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
  CurrentPrime = JSON.parse(localStorage.getItem('correntPrime')) || {};

  // check if the userEmail  exist
  let exist = (juniors_arr.length && 
    JSON.parse(localStorage.getItem('juniors_arr')).some(data => data.email.toLowerCase() == email)
    || (primes_arr.length && JSON.parse(localStorage.getItem('primes_arr')).some(data => data.email.toLowerCase() == email);   
    
  //if user NOT exist add the user to joniors_arr and save local
  if(!exist){
    primes_arr.push(
     { 
      companyName: _companyName,
      email: _email_prime,
      password: _password_prime,
     });

     // save data at local
     localStorage.setItem('primes_arr', JSON.stringify(primes_arr));
     CurrentPrime = primes_arr[indexCurrentPrime];
     localStorage.setItem('correntPrime', JSON.stringify(CurrentPrime));
     console.log(primes_arr[indexCurrentJunior]);
     indexCurrentPrime+=1;
     localStorage.setItem('indexPrime', JSON.stringify(indexCurrentPrime));
     //-----

    document.querySelector('#signUp_prime_form').reset();
    document.getElementById('companyName').focus();
    alert("נרשמת בהצלחה!");
    window.location.assign("/screens/after-Login/juniorAfterLogin.html"); 
  } else
  {
    // ERROR - user exist
    alert( "משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
  }
  e.preventDefault();
}








//----------------------------------------END PRIME--------------------------------















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

 