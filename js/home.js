// ---------local data--------
//corrent JUNIOR
let currentJunior = JSON.parse(localStorage.getItem('coorrentJunior')) || {};
//corrent PRIME
let currentPrime = JSON.parse(localStorage.getItem('correntPrime')) || {};
//-----------
// let currentUser = {}; // the user that online


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
        for (let index = 0; i < juniors_arr.length; index++) {
            if (juniors_arr[index].JSON.parse(localStorage.getItem('juniors_arr')).some(data => data.email.toLowerCase() == email)) {
                alert("התחברת בהצלחה!");
                currentUser = juniors_arr[index];
                window.location.assign("/screens/after-Login/juniorAfterLogIn.html"); 
                break;
            }
        }
        for (let index = 0; index < primes_arr.length; index++) {
            if (primes_arr[index].JSON.parse(localStorage.getItem('primes_arr')).some(data => data.email.toLowerCase() == email)) {
                alert("התחברת בהצלחה!");
                currentUser = primes_arr[index];
                window.location.assign("/screens/after-Login/primeAfterLogIn.html"); 
                break;
            }
        }
        for (let index = 0; index < admins_arr.length; index++) {
            if (admins_arr[index].JSON.parse(localStorage.getItem('admins_arr')).some(data => data.email.toLowerCase() == email)) {
                alert("התחברת בהצלחה!");
                currentUser = admins_arr[index];
                window.location.assign("/screens/after-Login/adminAfterLogIn.html"); 
                break;
            }  
        }
        }

    e.preventDefault();
    }
    
//   changeDiv();
//   function changeDiv()
//   {
//       document.querySelector('.userName').innerHTML = JSON.stringify(currentPrime.companyName);
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