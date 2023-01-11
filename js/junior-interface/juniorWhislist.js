


let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let wishJobs = currentUser.likedJobs || [] // all jobs in the system


showJobs() // show to the user jobs


function showJobs()
{
    let flag = 0
    if(wishJobs.length > 0 )
    {
        
        for (var j of wishJobs) {
            
                flag = 1
                let index = j.index // current index of the current job
                document.querySelector('.noJobsToShow').style.display = "none"
                var job = new Job(index,j.img,j.name,j.location,j.field,j.type,j.information) // crate job
                job.addToHtml() // add the current job to user interface 
        }
    }
    // if there is no offer jobs show to user image and txt that he has not offers job
    if( wishJobs.length == 0|| wishJobs == null || flag == 0 )
    {
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שאהבת'
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noPostedJobs.png')
        
    }
    
   
}



// submit job Bttn
function submitJob(e)
{
    let _index = e.target.id  // index of the clicked job
    console.log("index of sumbit bttn in jobs arr :" ,_index) 
    // add to the current user - submit arr the job that he submit
    let exist = currentUser.submitJobs.some(job=> job.index == _index)
    if(!exist)
    {
        for (var j of jobs)
        {
            if(j.index == _index)
            {
                currentUser.submitJobs.push(j)
                localStorage.setItem('currentUser',JSON.stringify(currentUser))
                updateCurrent_InAllUsers_Local() // update the currenr in all users arr
                updateJobinLocal(_index) // update the job request in jobs arr
            }

        
        } 
    }else{
        alert('כבר הגשת בקשה למשרה זו!')
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



