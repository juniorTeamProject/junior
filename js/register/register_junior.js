// global vars 
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];  // all users
let juniors_arr = []; // all Juniors users
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}; // the corrent User that SignIn
let indexCorrentJunior = 0; // the index and number of juniors that sign in

//----------------------------------------JUNIOR----------------------------


//signUp Junior
const signUp_Jounior = e => {
  // get Junior data
  let _fullName = document.querySelector('#fullName').value;
  let _email_junior = document.querySelector('#email').value;
  let _password_junior = document.querySelector('#password').value;
  let _langunge = document.querySelector('#languages-select').value;
  let _jobScope =  document.querySelector('#scopeJob-select').value;
  let _jobType = document.querySelector('#typeJob-select').value;
  let _knowledge = document.querySelector('#knowledge-select').value;
  let _jobField = document.querySelector('#jobField-select').value;
  let _locationJob = document.querySelector('#locationJob-select').value;

  //check and convert the item in local to object
  juniors_arr = JSON.parse(localStorage.getItem('juniors_arr')) || [];
  indexCorrentJunior = JSON.parse(localStorage.getItem('indexJunior')) || 0;
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
  let _img = localStorage.getItem('userImg'); // get img

   // check if the userEmail  exist
   let exist = (allUsers_arr.length && 
    JSON.parse(localStorage.getItem('allUsers_arr')).some(data => data.Email.toLowerCase() == _email_junior));


  //if user NOT exist add the user to joniors_arr and save local
  if(!exist){
    allUsers_arr.push(
      { 
       UserType: "Junior",
       Name: _fullName,
       Email: _email_junior,
       Password: _password_junior,
       Langunge : _langunge,
       JobScope: _jobScope,
       JobType: _jobType,
       Knowledge: _knowledge,
       JobField: _jobField,
       LocationJob: _locationJob,
       img:_img
      });
    juniors_arr.push(
      { 
      UserType: "Junior",
      Name: _fullName,
      Email: _email_junior,
      Password: _password_junior,
      Langunge : _langunge,
      JobScope: _jobScope,
      JobType: _jobType,
      Knowledge: _knowledge,
      JobField: _jobField,
      LocationJob: _locationJob,
      img:_img
      });
      
    // save data at local
    localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
    localStorage.setItem('juniors_arr', JSON.stringify(juniors_arr));
    currentUser = juniors_arr[indexCorrentJunior];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    console.log(juniors_arr[indexCorrentJunior]);
    indexCorrentJunior+=1;
    localStorage.setItem('indexJunior', JSON.stringify(indexCorrentJunior));
    //-----

    document.querySelector('#signUp-junior-form').reset();
    document.getElementById('fullName').focus();
    alert("נרשמת בהצלחה!");
    window.location.assign("/screens/after-Login/juniorAfterLogin.html"); 
      
    // if the user is exist 
  }
  else{
      alert("משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
  }
  e.preventDefault();
}
//----------------------------------------END JUNIOR----------------------------




//choose image in signup from file
function pickImage(input) {    
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    
    reader.onload = function (e) {
      let url = e.target.result;
    $('.imageFile').attr('src', url).width(100).height(90);
    localStorage.setItem('userImg',url);
    console.log(e.target.result);

    };
    
    reader.readAsDataURL(input.files[0]);
  }
}
