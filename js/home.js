// ---------local data--------
allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];
//corrent User
currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
AdminsSetup = JSON.parse(localStorage.getItem('AdminsSetup')) || 0; //admins Setup
//-----------

//-------------------------------ADMIN-------------------------------------
if (AdminsSetup == 0){
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
        UserType: "Admin",
        Email: _emailAdmin,
        Password: "123456",
        });
      allUsers_arr.push(
        {
        UserType: "Admin",
        Email: _emailAdmin,
        Password: "123456",
        });
      AdminsSetup = 1;
      indexCurrentAdmin+=1;
      localStorage.setItem('AdminsSetup', JSON.stringify(AdminsSetup));
      localStorage.setItem('indexAdmin', JSON.stringify(indexCurrentAdmin));
      localStorage.setItem('admins_arr', JSON.stringify(admins_arr));
      localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
      console.log(admins_arr[indexCurrentAdmin]);
    }
  }
  
  //----------------------------------------END ADMIN--------------------------------






//----------------------------SIGNIN/ Login--------------------------------------

// user signIn after signUp
function signIn(e) {
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    // check if user exist
    let exist = (allUsers_arr.length && 
    JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email && data.Password.toLowerCase() == password));
    let user  = allUsers_arr.filter(user => user.Email == email);
    
    //user not exist
    if(!exist){
        alert("שם משתמש או סיסמא אינם נכונים!");
    }
    else{
        localStorage.setItem("currentUser",JSON.stringify(user));
        currentUser = user;
        console.log(currentUser);
        alert("התחברת בהצלחה!");
        if (currentUser[0].UserType == "Admin") {
            window.location.assign("/screens/after-Login/adminAfterLogIn.html"); 
        }
        if (currentUser[0].UserType == "Prime") {
            window.location.assign("/screens/after-Login/primeAfterLogIn.html");
        }
        if (currentUser[0].UserType == "Junior") {
            window.location.assign("/screens/after-Login/juniorAfterLogIn.html");
        }
    }
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