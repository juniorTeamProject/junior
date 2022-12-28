// global vars 
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr')) || [];  // all users
let currentUser = {}; // the corrent User that SignIn
let indexUsers = JSON.parse(localStorage.getItem('indexUsers')) || 0; // the index and number of juniors that sign in
let flagImg = 0;

//----------------------------------------JUNIOR----------------------------


//signUp Junior
function signUp_Junior(_fullName, _email_junior, _password_junior, _langunge, _jobScope, _jobType, _knowledge, _jobField, _locationJob, _img){

  //check and convert the item in local to object
  currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

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
       img:_img,
       likedJobs:[],
       submitJobs:[]
       img:_img 
      });
      
    // save data at local
    localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
    currentUser = allUsers_arr[indexUsers];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    indexUsers+=1;
    localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
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
}

function dataJunior(e){

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
  let _img = localStorage.getItem('userImg'); // get img
  if(flagImg == 0){
    _img = "/images/junior_logo.png";
  }
  signUp_Junior(_fullName, _email_junior, _password_junior, _langunge, _jobScope, _jobType, _knowledge, _jobField, _locationJob, _img);
  e.preventDefault();
}
//----------------------------------------END JUNIOR----------------------------




//-----------------------------------------another funf-----------------------------

//choose image in signup from file
function pickImage(input) {    
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      flagImg = 1;
      reader.onload = function (e) {
        let url = e.target.result;
      $('.imageFile').attr('src', url).width(100).height(90);
      localStorage.setItem('userImg',url);
      console.log(e.target.result);

      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }