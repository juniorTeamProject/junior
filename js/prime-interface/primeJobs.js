let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let jobs = JSON.parse(localStorage.getItem('jobs'))

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

function editJob(e)
{
    console.log(e.target.id)
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