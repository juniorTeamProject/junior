let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let jobs = JSON.parse(localStorage.getItem('jobs'));
let index;


showPostedJobs()


function showPostedJobs()
{
    // check that the prime user has jobs that he posted
    if(currentUser.postedJobs.length > 0)
    {
        document.querySelector('.noJobsToShow').style.display = "none"
        for(var j of currentUser.postedJobs)
        {
            document.querySelector('#txt_activeJobs').innerHTML = currentUser.postedJobs.length + ': משרות פעילות'
            let index = j.index
            var postdJob = new Job(index,j.img,j.name,j.location,j.field,j.type,j.information)
           postdJob.addPostedToHtml()
        }

    }else{
        document.querySelector('#txt_activeJobs').innerHTML = 'אין משרות פעילות'
        document.querySelector('.noJobsToShow').style.display = "flex"
    }
}


//----------------- Delet eJob-----------/////
function deleteJob(e){
    let numOfJobs = JSON.parse(localStorage.getItem('numOfJobs')) || 0
    let index = e.target.id;
    for (let i = 0; i < allUsers_arr.length; i++) {
        if(allUsers_arr[i].Email == currentUser.Email){
            allUsers_arr[i].postedJobs = allUsers_arr[i].postedJobs.filter(item => item.index != parseInt(index));
            localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to local
        }    
    }
    let temp = jobs.filter(item => item.index != parseInt(index));
    localStorage.setItem('jobs', JSON.stringify(temp)); // save to local

    currentUser.postedJobs = currentUser.postedJobs.filter(item => item.index != parseInt(index));
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); // save to local

    numOfJobs-=1; // decrease the num of jobs
    localStorage.setItem('numOfJobs', JSON.stringify(numOfJobs)); // save to local
    alert( "משרה הוסרה בהצלחה!");
    location.reload();
}


//----------------- Edit Job-----------/////
function Jobindex(e){
    index = e.target.id;
    localStorage.setItem('Jobindex', JSON.stringify(index));
    window.location.assign("/screens/prime-interface/jobs/primeEditJob.html");
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

  let popup = document.querySelector('.wrapper-popUp-REQUEST')
  window.addEventListener('scroll', function() {
    // If the pop-up is visible, keep it fixed at the top of the page
    if (popup.style.display === 'flex') {
      popup.style.top = window.pageYOffset + 'px';
    }
  });












// login bttn - func to open\close the popUp
var toggle = false;
function toggleReq_popUp() 
{
   if(toggle == false){
       document.querySelector(".wrapper-popUp-REQUEST").style.display = "flex";
       toggle = true;
   }else{
       document.querySelector(".wrapper-popUp-REQUEST").style.display = "none";
       toggle = false;
   }
}