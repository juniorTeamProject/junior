// ---------local data--------
//corrent JUNIOR
let coorentJunior = JSON.parse(localStorage.getItem('coorrentJunior')) || {};
//corrent PRIME
let coorentPrime = JSON.parse(localStorage.getItem('correntPrime')) || {};
//-----------

//----------------------------SIGN-IN / Log In--------------------------------------
// user signIn after signUp
function signIn(e) {
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    let juniors_arr = JSON.parse(localStorage.getItem('juniors_arr')) || [];
    let primes_arr = JSON.parse(localStorage.getItem('primes_arr')) || [];
    // check if user exist
    let exist = (juniors_arr.length && 
    JSON.parse(localStorage.getItem('juniors_arr')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password))
    || (primes_arr.length && JSON.parse(localStorage.getItem('primes_arr')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password));
    
    //user not exist
    if(!exist){
        alert("שם משתמש או סיסמא אינם נכונים!");
    }
    else{
        alert("התחברת בהצלחה!");
        window.location.assign("/screens/after-Login/juniorAfterLogin.html"); 
    }
    
    e.preventDefault();
    
  }
//   changeDiv();
//   function changeDiv()
//   {
//       document.querySelector('.userName').innerHTML = JSON.stringify(coorentPrime.companyName);
//   }
  




  //------------------------------------FUNC------------------------------------
  // login bttn - func to open\close the popUp
 var toggle = false;
 function toggleLogin() 
 {
    if(toggle == false){
        document.querySelector(".wrapper-popUp-login").style.display = "flex";
        toggle = true;
    }else{
        document.querySelector(".wrapper-popUp-login").style.display = "none";
        toggle = false;
    }
 }