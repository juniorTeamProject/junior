

// ---------local data--------
allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];
//corrent User
currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
AdminsSetup = JSON.parse(localStorage.getItem('AdminsSetup')) ||  0; //admins Setup
//-----------

//----------------------------SIGNIN/ Login--------------------------------------

// user signIn after signUp

function signIn(email,password){
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    // if user ia blocked
    let blockUsers = JSON.parse(localStorage.getItem('blockUsers')) || [];
    let block = blockUsers.filter(user => user.Email == email) || 0;
    if(block != 0){
        alert("משתמש זה הינו חסום מהאתר!");
        return;
    }
    // check if user exist
    let exist = (allUsers_arr.length && 
    JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email && data.Password.toLowerCase() == password));
    let user  = allUsers_arr.filter(user => user.Email == email);
    currentUser = user[0];
    
    //user not exist
    if(!exist){
        alert("שם משתמש או סיסמא אינם נכונים!");
    }
    else{
        localStorage.setItem("currentUser",JSON.stringify(currentUser));
        
        console.log(currentUser);
        alert("התחברת בהצלחה!");
        if (currentUser.UserType == "Admin") {
            window.location.assign("/screens/after-Login/adminAfterLogIn.html"); 
        }
        if (currentUser.UserType == "Prime") {
            window.location.assign("/screens/after-Login/primeAfterLogIn.html");
        }
        if (currentUser.UserType == "Junior") {
            window.location.assign("/screens/after-Login/juniorAfterLogIn.html");
        }
    }
}


function data_signIn(e) {
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;
    signIn(email,password);

    e.preventDefault();  
  }


  //---------------------------- End SIGNIN/ Login--------------------------------------
  

//----------------------------LOGOUT--------------------------------------

function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    console.log(currentUser);
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }


//----------------------------End Logout--------------------------------------

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


  ///---------------Cant back if not log in---------------------
  if(currentUser.Name == null && currentUser.CompanyName == null && window.location.href != "http://127.0.0.1:5500/screens/home.html"){
    window.location.assign("/screens/home.html");
 }
 ///---------------Cant back if not log in---------------------

