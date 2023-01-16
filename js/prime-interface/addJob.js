

let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))


function addJob(e) 
{
  // localStorage
    let numOfJobs = JSON.parse(localStorage.getItem('numOfJobs')) || 0
    let jobs = JSON.parse(localStorage.getItem('jobs')) || []
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}

    // job detailes data
    let compantName = document.querySelector('.JobCompanyName')
    let select_languenge =  document.querySelector('#select_languenge')
    let select_type = document.querySelector('#select_type')
    let select_JobScope = document.querySelector('#select-scopeJob')
    let select_Knowledge = document.querySelector('#select_Knowledge')
    let select_JobField = document.querySelector('#select_JobField')
    let select_LocationJob = document.querySelector('#select_LocationJob')
    let jobDescription = document.querySelector('.jobDescription')
    
    
    let job = {
      index: numOfJobs,
      img:currentUser.img,
      name: compantName.value,
      scope:select_JobScope.value,
      location: select_LocationJob.value,
      type: select_type.value,
      field: select_JobField.value,
      information: jobDescription.value,
      languenge: select_languenge.value,
      knowledge: select_Knowledge.value,
      requestJuniors:[],
      reqInPopUp:[],
      status:"ממתין..."
    } 

    jobs.push(job)  // push the new job to all jobs_arr in system 
    currentUser.postedJobs.push(job)
    localStorage.setItem('currentUser',JSON.stringify(currentUser)) // save to local
    for(let user = 0; user < allUsers_arr.length; user++ ) // save at all users arr the current user
    {
        if(allUsers_arr[user].Email == currentUser.Email)
        {
            allUsers_arr[user] = currentUser
            localStorage.setItem('allUsers_arr',JSON.stringify(allUsers_arr))
        }
    }
    numOfJobs+=1 // increase the num of jobs
    localStorage.setItem('numOfJobs',JSON.stringify(numOfJobs)) // save to local
    localStorage.setItem('jobs',JSON.stringify(jobs)) // save to local new new jobs arr
    alert("משרה הוספה בהצלחה!")
    e.preventDefault();
}



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



  function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    console.log(currentUser);
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
}
