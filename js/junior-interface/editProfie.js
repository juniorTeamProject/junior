
// Junior Data
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let fullName = document.querySelector("#name")
let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let Langunge = document.querySelector("#languages")
let JobScope = document.querySelector("#JobScope")
let JobType = document.querySelector("#typeJob")
let Knowledge = document.querySelector("#knowledge")
let JobField = document.querySelector("#jobField")
let LocationJob = document.querySelector("#locationJob")


document.querySelector("#name").value = currentUser.Name
document.querySelector("#email").value = currentUser.Email
document.querySelector("#password").value = currentUser.Password


if(window.location == '/screens/junior-interface-profile/juniorEditProfile'){
    fullName.value = currentUser.Name
    email.value = currentUser.Email;
    pass.value = currentUser.Password
}

function updateJunior(){
    if(fullName.value != currentUser.Name && fullName.value != ""){
        currentUser.Name = fullName.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Name",fullName.value);
        updateUser_J_arr(currentUser.Email,"Name",fullName.value);
    }
    if(email.value != currentUser.Email && email.value != ""){
        currentUser.Email = email.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Email",email.value);
        updateUser_J_arr(currentUser.Email,"Email",email.value);
    }
    if(pass.value != currentUser.Password && pass.value != ""){
        currentUser.Password = pass.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Password",pass.value);
        updateUser_J_arr(currentUser.Email,"Password",pass.value);
    }
    if(Langunge.value != currentUser.Langunge && Langunge.value != ""){
        currentUser.Langunge = Langunge.value;
        localStorage.setItem('Langunge', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Langunge",Langunge.value);
        updateUser_J_arr(currentUser.Email,"Langunge",Langunge.value);
    }
    if(JobScope.value != currentUser.JobScope && JobScope.value != ""){
        currentUser.JobScope = JobScope.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobScope",JobScope.value);
        updateUser_J_arr(currentUser.Email,"JobScope",JobScope.value);
    }
    if(JobType.value != currentUser.JobType && JobType.value != ""){
        currentUser.JobType = JobType.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobType",JobType.value);
        updateUser_J_arr(currentUser.Email,"JobType",JobType.value);
    }
    if(Knowledge.value != currentUser.Knowledge && Knowledge.value != ""){
        currentUser.Knowledge = Knowledge.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"Knowledge",Knowledge.value);
        updateUser_J_arr(currentUser.Email,"Knowledge",Knowledge.value);
    }
    if(JobField.value != currentUser.JobField && JobField.value != ""){
        currentUser.JobField = JobField.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"JobField",JobField.value );
        updateUser_J_arr(currentUser.Email,"JobField",JobField.value );
    }
    if(LocationJob.value != currentUser.LocationJob && LocationJob.value != ""){
        currentUser.LocationJob = LocationJob.value;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUser(currentUser.Email,"LocationJob",LocationJob.value);
        updateUser_J_arr(currentUser.Email,"LocationJob",LocationJob.value);
    }


    window.location.assign("/screens/junior-interface/profile/JuniorProfile.html");
}

function updateUser(email,info, value){
    let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];  // all users
    // let change = eval(info);
    for (let i = 0; i < allUsers_arr.length; i++) {
        if (allUsers_arr[i].Email == email){
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

function updateUser_J_arr(email,info, value){
    let juniors_arr = JSON.parse(localStorage.getItem('juniors_arr')) || [];
    // let change = eval(info);
    for (let i = 0; i < juniors_arr.length; i++) {
        if (juniors_arr[i].Email == email){
            if(info == "Name"){
            juniors_arr[i].Name = value; 
            }
            if(info == "Email"){
            juniors_arr[i].Email = value; 
            }
            if(info == "Password"){
            juniors_arr[i].Password = value; 
            }
            if(info == "Langunge"){
            juniors_arr[i].Langunge = value; 
            }
            if(info == "JobScope"){
            juniors_arr[i].JobScope = value; 
            }
            if(info == "JobType"){
            juniors_arr[i].JobType = value; 
            }
            if(info == "Knowledge"){
            juniors_arr[i].Knowledge = value; 
            }
            if(info == "JobField"){
            juniors_arr[i].JobField = value; 
            }
            if(info == "LocationJob"){
            juniors_arr[i].LocationJob = value; 
            }
        }  
    }

    localStorage.setItem('juniors_arr', JSON.stringify(juniors_arr)); // save to all users
}

