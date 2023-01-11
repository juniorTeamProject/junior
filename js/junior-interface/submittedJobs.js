

let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let sumJobs = currentUser.submitJobs || [] // all jobs in the system


showJobs() // show to the user jobs


function showJobs()
{
    let flag = 0
    if(sumJobs.length > 0 )
    {
        
        for (var j of sumJobs) {
            
                flag = 1
                let index = j.index // current index of the current job
                document.querySelector('.noJobsToShow').style.display = "none"
                var job = new Job(index,j.img,j.name,j.location,j.field,j.type,j.information, j.status) // crate job
                job.addToHtml() // add the current job to user interface 
        }
    }
    // if there is no offer jobs show to user image and txt that he has not offers job
    if( sumJobs.length == 0|| sumJobs == null || flag == 0 )
    {
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שאהבת'
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noPostedJobs.png')
        
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

