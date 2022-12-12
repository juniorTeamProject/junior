// ---------local data--------
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];
//corrent User
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
let AdminsSetup = JSON.parse(localStorage.getItem('AdminsSetup')) || 0; //admins Setup
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






//----------------------------SIGNIN--------------------------------------
// user signIn after signUp
function signIn(e) {
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    // check if user exist
    let exist = (allUsers_arr.length && 
    JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email && data.Password.toLowerCase() == password))
    let user  = allUsers_arr.filter(user => user.Email == email);
    
    
    //user not exist
    if(!exist){
        alert("שם משתמש או סיסמא אינם נכונים!");
    }
    else{
        localStorage.setItem("currentUser",JSON.stringify(user));
        currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        console.log(currentUser);
        alert("התחברת בהצלחה!");
        switch (currentUser.UserType) {
            case "Junior":
                window.location.assign("/screens/after-Login/juniorAfterLogin.html"); 
                break;
            case "Prime":
                window.location.assign("/screens/after-Login/primeAfterLogIn.html"); 
                break;
            case "Admin":
                window.location.assign("/screens/after-Login/adminAfterLogIn.html"); 
                break;
        }
        //And put the editted object back to cache
    }
    e.preventDefault();  
  }
  

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