//----------------------------------------PRIME---------------------------------

let flagImg = 0;
let _img;

function signUp_Prime(_companyName, _email_prime, _password_prime, _img){

  let indexUsers = JSON.parse(localStorage.getItem('indexUsers')) || 0; // the index and number of Primes that sign in
  let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users
  let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}; // the corrent User that SignIn
     
    //check and convert the item in local to object
    currentUser = {};
    // check if the userEmail  exist
    let exist = (allUsers_arr.length && 
      JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == _email_prime)); 
      
    //if user NOT exist add the user to joniors_arr and save local
    if(!exist){
      allUsers_arr.push(
        {
         UserType: "Prime",
         Package: "Bronze",
         CompanyName: _companyName,
         Email: _email_prime,
         Password: _password_prime,
         img: _img,
         postedJobs:[]
        });
       // save data at local
       localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
       currentUser = allUsers_arr[indexUsers];
       localStorage.setItem('currentUser', JSON.stringify(currentUser));
       indexUsers += 1;
       localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
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
    _img = localStorage.getItem('userImg');
    let _companyName = document.querySelector('#companyName').value;
    let _email_prime = document.querySelector('#email_prime').value;
    let _password_prime = document.querySelector('#password_prime').value;
    if(flagImg == 0){
      _img = "/images/prime_logo.png";
    }
    signUp_Prime(_companyName, _email_prime, _password_prime, _img);
    e.preventDefault();
  }
  //----------------------------------------END PRIME--------------------------------
  
  
  //-----------------------------------------another funf-----------------------------
  
  //change Prime image in 
  function pickImage(input) {    
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      flagImg = 1;
      reader.onload = function (e) 
      {
        let url = e.target.result;
        var imageFiles = document.getElementsByClassName('imageFile');
        for (var i = 0; i < imageFiles.length; i++) {
            imageFiles[i].setAttribute('src', url);
            imageFiles[i].style.width = '100px';
            imageFiles[i].style.height = '90px';
        }

        localStorage.setItem('userImg',url);
        console.log(e.target.result);

      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }