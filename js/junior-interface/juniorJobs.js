

let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let jobs = JSON.parse(localStorage.getItem('jobs')) || [] // all jobs in the system


showJobs()
markLikes()    



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

for (var j of jobs) 
    {
        bttn = document.getElementById(id_indexString)
        let exist = currentUser.likedJobs.some(job=> job.index == _index) // check if he did already like
        if(!exist)
        {
            if (j.index == _index)
            {
                bttn.style.color = 'red'
                currentUser.likedJobs.push(j) // push the current job to current likedJobs_arr user
                localStorage.setItem('currentUser',JSON.stringify(currentUser)) // set local the new likedJob in arr
                for(let user = 0; user < allUsers_arr.length; user++ )
                {
                    if(allUsers_arr[user].Email == currentUser.Email)
                    {
                        allUsers_arr[user] = currentUser
                        localStorage.setItem('allUsers_arr',JSON.stringify(allUsers_arr))
                    }
                }
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
 console.log(e.target.id) 
}



let searchInput = document.querySelector("#sreachJobs")
searchInput.addEventListener("input", e => {
    let value = e.target.value
    console.log(value)
    jobs.forEach(job => {
        let isVisible = job.name.includes(value)
        job.classList.toggle("hide", !isVisible)
    })
})



//----------------------------LOGOUT--------------------------------------

function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }