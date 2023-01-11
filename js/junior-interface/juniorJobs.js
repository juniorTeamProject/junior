


let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let jobs = JSON.parse(localStorage.getItem('jobs')) || [] // all jobs in the system


showJobs() // show to the user jobs
markLikes() // mark the jobs that the user liked  


function showJobs()
{
    let flag = 0
    if(jobs.length > 0 )
    {
        
        for (var j of jobs) {
            
            // check if the user has offer jobs according to his private inforamtion
            if(currentUser.LocationJob == j.location
                && currentUser.JobType == j.type
                && currentUser.JobField == j.field
                && currentUser.JobScope == j.scope
                && currentUser.Knowledge == j.knowledge
                )
            {  
                flag = 1
                let index = j.index // current index of the current job
                document.querySelector('.noJobsToShow').style.display = "none"
                var job = new Job(index,j.img,j.name,j.location,j.field,j.type,j.information) // crate job
                job.addToHtml() // add the current job to user interface 
            }
        }
    }
    // if there is no offer jobs show to user image and txt that he has not offers job
    if( jobs.length == 0|| jobs == null || flag == 0 )
    {
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שמותאמות לך'
        
    }
    
   
}

// like Bttn
function likeBttn(e) 
{
    let _index = e.target.id // index of the job in jobs arr
    console.log(_index) 
    let id_indexString = _index.toString() // convert the index to string for use in style 
    let bttn = document.getElementById(id_indexString)
    let exist = currentUser.likedJobs.some(job => job.index == parseInt(_index)) // check if he did already like

    if(!exist)
    {
        //like
        for (var j of jobs) 
        {
            
            if (j.index == parseInt(_index))
            {
                bttn = document.getElementById(id_indexString)
                bttn.style.color = 'red'
                currentUser.likedJobs.push(j) // push the current job to current likedJobs_arr user
                localStorage.setItem('currentUser',JSON.stringify(currentUser)) // set local the new likedJob in arr
                updateCurrent_InAllUsers_Local()
            }
            
            
        }
    }else{
        // dislike 
        for (var j of currentUser.likedJobs)
        {
            if (j.index == parseInt(_index))
            {
                let indexInLikesArr = currentUser.likedJobs.indexOf(j)
                console.log("index in likes arrr: " ,parseInt(indexInLikesArr))
                currentUser.likedJobs.splice(indexInLikesArr,1)
                bttn.style.color = '#D3D3D3'
                localStorage.setItem('currentUser',JSON.stringify(currentUser))
                
            }
        }
    }
    
}
function markLikes()
{ 
    
    let index = null
    if(currentUser.likedJobs.length > 0)
    {
        for(var j of currentUser.likedJobs)
        {
            index = j.index
            let id_indexToString = index.toString()
            let bttn = document.getElementById(id_indexToString)
            bttn.style.color = 'red'
        }
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
                alert('בקשה נשלחה בהצלחה!')
            }

        
        } 
    }else{
        alert('כבר הגשת בקשה למשרה זו!')
    }
    
    
}

//update the requestsArr of the current job
function updateJobinLocal(_index)
{
    for(let i = 0; i < jobs.length; i++ )
    {
        if(jobs[i].index == _index)
        {
            jobs[i].requestJuniors.push(currentUser.Email)
            localStorage.setItem('jobs',JSON.stringify(jobs))
        }
    }
}

// func that update the current user detales at all user arr
function updateCurrent_InAllUsers_Local()
{
    for(let user = 0; user < allUsers_arr.length; user++ )
    {
        if(allUsers_arr[user].Email == currentUser.Email)
        {
            allUsers_arr[user] = currentUser
            localStorage.setItem('allUsers_arr',JSON.stringify(allUsers_arr))
        }
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

