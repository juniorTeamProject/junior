
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) ||[];  // all users

function admin_Permission(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#password').value;

    let admins_arr = JSON.parse(localStorage.getItem('admins_arr'))  ||[];  // all admin users
    let indexAdmin = JSON.parse(localStorage.getItem('indexAdmin'))  || 0;; // the index and number of Admins
    let indexUsers = JSON.parse(localStorage.getItem('indexUsers')) || 0; // the index of users
    let exist = (allUsers_arr.length && 
        JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email));
    
    if(exist){
            alert( "משתמש זה קיים במערכת.\nאנא רשום מייל אחר.");
    }
    else{
        admins_arr.push(
            {
            UserType: "Admin",
            Name: name,
            Email: email,
            Password: pass,
            });
        allUsers_arr.push(
            {
            UserType: "Admin",
            Name: name,
            Email: email,
            Password: pass,
            });
        indexAdmin += 1;
        indexUsers += 1;
        localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
        localStorage.setItem('indexAdmin', JSON.stringify(indexAdmin));
        localStorage.setItem('admins_arr', JSON.stringify(admins_arr));
        localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
        alert( "אדמין נוסף בהצלחה!");
    }
}

function deleteUser(){
    let email = document.querySelector('#email_delete_user').value;
    let indexUsers = JSON.parse(localStorage.getItem('indexUsers')) || 0; // the index of users

    let exist = (allUsers_arr.length && 
        JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        let temp = allUsers_arr.filter(item => item.Email != email);
        localStorage.setItem('allUsers_arr', JSON.stringify(temp));;
        indexUsers -= 1;
        localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
        alert( "משתמש נמחק בהצלחה!");
    }
    else{
        alert( "משתמש זה אינו קיים במערכת!");
    }
}


function BlockUser(){
    let email = document.querySelector('#email_block_user').value;
    let blockUsers = JSON.parse(localStorage.getItem('blockUsers')) || [];
    let exist = (allUsers_arr.length && 
        JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        let user = allUsers_arr.filter(item => item.Email == email);
        blockUsers.push(
            {
            UserType: user[0].UserType,            
            Name: user[0].Name || user[0].CompanyName,           
            Email: email,
            });
        localStorage.setItem('blockUsers', JSON.stringify(blockUsers));
        alert( "משתמש נחסם בהצלחה!");
    }
    else{
        alert( "משתמש זה אינו קיים במערכת!");
    }
}


function removeBlock(){
    let email = document.querySelector('#email_remove_block').value;
    let blockUsers = JSON.parse(localStorage.getItem('blockUsers')) || [];
    let exist = (allUsers_arr.length && 
        JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        let newArray = blockUsers.filter(item => item.Email != email);
        localStorage.setItem('blockUsers', JSON.stringify(newArray));
        alert( "חסימת המשתמש הוסרה בהצלחה!");
    }
    else{
        alert( "משתמש זה אינו קיים במערכת!");
    }
}


function upgradePlan(){
    let email = document.querySelector('#email_upgrade_plan').value;
    let plan = document.querySelector('#plan').value;

    let exist = (allUsers_arr.length && 
        JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        for (let i = 0; i < allUsers_arr.length; i++) {
            if (allUsers_arr[i].Email == email){
                allUsers_arr[i].Package = plan; 
            }
        }
        localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
        alert( "משתמש פריים השתדרג בהצלחה!");
    }
    else{
        alert( "משתמש זה אינו קיים במערכת!");
    }
}

