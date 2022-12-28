
// Prime data
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let CompanyName = document.querySelector("#companyName")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let img;
document.querySelector('.imageFile').setAttribute("src",currentUser.img);
let Package;
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users

document.querySelector("#companyName").value = currentUser.CompanyName
document.querySelector("#email").value = currentUser.Email
document.querySelector("#password").value = currentUser.Password


function updatePrime(){
    if(CompanyName.value != currentUser.CompanyName && CompanyName.value != ""){
        currentUser.CompanyName = CompanyName.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"CompanyName",CompanyName.value);
    }
    if(email.value != currentUser.Email && email.value != ""){
        let exist = (allUsers_arr.length && 
            JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == currentUser.Email));
        if(exist){
                alert( "משתמש זה קיים במערכת.\nאנא הרשם עם מייל אחר.");
        }
        else{
        currentUser.Email = email.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Email",email.value);
        }
    }
    if(pass.value != currentUser.Password && pass.value != ""){
        currentUser.Password = pass.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Password",pass.value);
    }
    if(img != currentUser.img && img != null){
        currentUser.img = img;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"img",img);
    }
    if(Package != currentUser.Package && Package != null){
        currentUser.Package = Package;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Package",Package);
    }
    // document.querySelector('.imageFile').setAttribute("src",currentUser.img);
    window.location.assign("/screens/prime-interface/profile/PrimeEditProfile.html");
}

function updateUser(email,info, value){
    for (let i = 0; i < allUsers_arr.length; i++) {
        if (allUsers_arr[i].Email == email){
            if(info == "CompanyName"){
            allUsers_arr[i].CompanyName = value; 
            }
            if(info == "Email"){
            allUsers_arr[i].Email = value; 
            }
            if(info == "Password"){
            allUsers_arr[i].Password = value; 
            }
            if(info == "img"){
            allUsers_arr[i].img = value; 
            }
            if(info == "Package"){
            allUsers_arr[i].Package = value; 
            }
        }  
    }

    localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
}


 //choose image in signup from file
 function pickImage(input) {    
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      
      reader.onload = function (e) {
        let url = e.target.result;
        img = url;
      $('.imageFile').attr('src', url).width(100).height(90);
      localStorage.setItem('userImg',url);
      console.log(e.target.result);

      }; 
      reader.readAsDataURL(input.files[0]);
    }
  }


// update packege
let Packagefalg = false;
function updatePackege(e){
    if(Packagefalg == false){
        Package = e.target.id;
        hover = e.target.className;
        document.getElementById(hover).style.border = "solid #7A3DC6";
        Packagefalg = true;
    }
    else{
        Package = null;
        hover = e.target.className;
        document.getElementById(hover).style.border = "none";
        Packagefalg = false;
    }
}



//---------------------------Remove Prime User----------------------/-----
function removePrime(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];
    let temp = allUsers_arr.filter(item => item.Email != currentUser.Email);
    localStorage.setItem('allUsers_arr', JSON.stringify(temp));;
        currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    window.location.assign("/screens/home.html");
}


//----------------------------LOGOUT--------------------------------------

function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }

