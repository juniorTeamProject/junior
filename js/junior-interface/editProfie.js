


// Junior Data
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users
let indexUsers = JSON.parse(localStorage.getItem('indexUsers')) || 0; // the index and number of juniors that sign in

let fullName = document.querySelector("#name") 
let email = document.querySelector("#email") 
let pass = document.querySelector("#password") 
let Langunge = document.querySelector("#languages") 
let JobScope = document.querySelector("#JobScope") 
let JobType = document.querySelector("#typeJob") 
let Knowledge = document.querySelector("#knowledge") 
let JobField = document.querySelector("#jobField") 
let LocationJob = document.querySelector("#locationJob") 


//img
let img;
    
document.querySelector('.imageFile').setAttribute("src",currentUser.img);

document.querySelector("#name").value = currentUser.Name
document.querySelector("#email").value = currentUser.Email
document.querySelector("#password").value = currentUser.Password
document.querySelector("#languages").value = currentUser.Langunge
document.querySelector("#JobScope").value = currentUser.JobScope
document.querySelector("#typeJob").value = currentUser.JobType
document.querySelector("#knowledge").value = currentUser.Knowledge
document.querySelector("#jobField").value = currentUser.JobField
document.querySelector("#locationJob").value = currentUser.LocationJob




function updateJunior(){
    if(img != currentUser.img && img != null){
        currentUser.img = img;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"img",img);
    }
    if(fullName.value != currentUser.Name && fullName.value != ""){
        currentUser.Name = fullName.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Name",fullName.value);
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
    if(Langunge.value != currentUser.Langunge && Langunge.value != ""){
        currentUser.Langunge = Langunge.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Langunge",Langunge.value);
    }
    if(JobScope.value != currentUser.JobScope && JobScope.value != ""){
        currentUser.JobScope = JobScope.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobScope",JobScope.value);
    }
    if(JobType.value != currentUser.JobType && JobType.value != ""){
        currentUser.JobType = JobType.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobType",JobType.value);
    }
    if(Knowledge.value != currentUser.Knowledge && Knowledge.value != ""){
        currentUser.Knowledge = Knowledge.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Knowledge",Knowledge.value);
    }
    if(JobField.value != currentUser.JobField && JobField.value != ""){
        currentUser.JobField = JobField.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobField",JobField.value );
    }
    if(LocationJob.value != currentUser.LocationJob && LocationJob.value != ""){
        currentUser.LocationJob = LocationJob.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"LocationJob",LocationJob.value);
    }

    window.location.assign("/screens/junior-interface/profile/JuniorProfile.html");
}

function updateUser(email,info, value){
    let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users
    // let change = eval(info);
    for (let i = 0; i < allUsers_arr.length; i++) {
        if (allUsers_arr[i].Email == email){
            if(info == "img"){
                allUsers_arr[i].img = value; 
                }
            if(info == "Name"){
            allUsers_arr[i].Name = value; 
            }
            if(info == "Email"){
            allUsers_arr[i].Email = value; 
            }
            if(info == "Password"){
            allUsers_arr[i].Password = value; 
            }
            if(info == "Langunge"){
            allUsers_arr[i].Langunge = value; 
            }
            if(info == "JobScope"){
            allUsers_arr[i].JobScope = value; 
            }
            if(info == "JobType"){
            allUsers_arr[i].JobType = value; 
            }
            if(info == "Knowledge"){
            allUsers_arr[i].Knowledge = value; 
            }
            if(info == "JobField"){
            allUsers_arr[i].JobField = value; 
            }
            if(info == "LocationJob"){
            allUsers_arr[i].LocationJob = value; 
            }
        }  
    }

    localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
}

  //change Prime image in 
  function pickImage(input) {    
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      flagImg = 1;
      reader.onload = function (e) 
      {
        let url = e.target.result;
        img = url;
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


//----------------------------LOGOUT--------------------------------------

function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }


  //---------------------------Remove Junior User----------------------/-----
function removeJunior(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];
    let temp = allUsers_arr.filter(item => item.Email != currentUser.Email);
    localStorage.setItem('allUsers_arr', JSON.stringify(temp));;
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    indexUsers-=1;
    localStorage.setItem('indexUsers', JSON.stringify(indexUsers));  
    window.location.assign("/screens/home.html");
}
