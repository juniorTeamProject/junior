//----------------------------------------PRIME---------------------------------

// global vars
function signUp_Prime(_companyName, _email_prime, _password_prime){

  let primes_arr = []; // all primes users
  let indexCurrentPrime = 0; // the index and number of Primes that sign in
  let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}; // the corrent User that SignIn
     
    //check and convert the item in local to object
    primes_arr = JSON.parse(localStorage.getItem('primes_arr')) || [];
    indexCurrentPrime = JSON.parse(localStorage.getItem('indexPrime')) || 0;
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    let _img = localStorage.getItem('userImg');
    // check if the userEmail  exist
    let exist = (allUsers_arr.length && 
      JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == _email_prime)); 
      
    //if user NOT exist add the user to joniors_arr and save local
    if(!exist){
      allUsers_arr.push(
        {
         UserType: "Prime", 
         CompanyName: _companyName,
         Email: _email_prime,
         Password: _password_prime,
         img: _img
        });
      primes_arr.push(
       {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: _companyName,
        Email: _email_prime,
        Password: _password_prime,
        img: _img
       });
       // save data at local
       localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
       localStorage.setItem('primes_arr', JSON.stringify(primes_arr)); // add to all users arr
       currentUser = primes_arr[indexCurrentPrime];
       localStorage.setItem('currentUser', JSON.stringify(currentUser));
       console.log(primes_arr[indexCurrentPrime]);
       indexCurrentPrime += 1;
       localStorage.setItem('indexPrime', JSON.stringify(indexCurrentPrime));
       //-----
       document.querySelector('#signUp_prime_form').reset();
       document.getElementById('companyName').focus();
       alert("נרשמת בהצלחה!");
       window.location.assign("/screens/after-Login/primeAfterLogIn.html"); 
       return true;
    } else {
      // ERROR - user exist
      alert( "משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
      return false;
    }
  }
  
  // signUp prime
  function dataPrime(e){
  
    // data prime
    let _companyName = document.querySelector('#companyName').value;
    let _email_prime = document.querySelector('#email_prime').value;
    let _password_prime = document.querySelector('#password_prime').value;
    
    signUp_Prime(_companyName, _email_prime, _password_prime);
    e.preventDefault();
  }
  
  
  //----------------------------------------END PRIME--------------------------------
  
  
  //-----------------------------------------another funf-----------------------------
  
  //choose image in signup from file
  function pickImage(input) {    
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        
        reader.onload = function (e) {
          let url = e.target.result;
        $('.imageFile').attr('src', url).width(100).height(90);
        localStorage.setItem('userImg',url);
        console.log(e.target.result);
  
        };
        
        reader.readAsDataURL(input.files[0]);
      }
    }