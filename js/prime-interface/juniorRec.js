let indexJob = localStorage.getItem('currentJobRec_index') 
let indexRec = localStorage.getItem('currentJobIndexRec_recInpopUp')
let jobs = JSON.parse(localStorage.getItem('jobs'))
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let juniorProfileUser = JSON.parse(localStorage.getItem('juniorProfileUser')) || {}



let indexJob_toInt = parseInt(indexJob)
let indexRec_toInt = parseInt(indexRec)

let email;
let user;

for(var j of jobs)
{
    if (j.index == indexJob_toInt)
    {
        for(let i = 0; i < j.reqInPopUp.length; i++)
        {
            if(i == indexRec_toInt)
            {
                email = j.reqInPopUp[i]
            }
        }
    }
}

for(var u of allUsers_arr)
{
    if(u.Email == email)
    {
        user = u
        localStorage.setItem('juniorProfileUser',JSON.stringify(user))
    }
}
console.log(user)
document.querySelector('.photoProfile').setAttribute("src",user.img)
document.querySelector('#profileName').innerHTML = user.Name
document.querySelector('.languange').innerHTML = user.Langunge
document.querySelector('.jobType').innerHTML = user.JobType
document.querySelector('.jobScope').innerHTML = user.JobScope
document.querySelector('.Knowledge').innerHTML = user.Knowledge
document.querySelector('.JobField').innerHTML = user.JobField
document.querySelector('.LocationJob').innerHTML = user.LocationJob



function confirmRec(e)
{
    var textBttn = e.target.innerHTML // the txt of bttn "אשר" or "דחה"
    console.log(textBttn);
    console.log(juniorProfileUser);
    console.log(indexJob);
    // search the user in all users
    for(var user of allUsers_arr)
    {
        // find the user
        if(user.UserType == "Junior" && user.Email == juniorProfileUser.Email)
        {
            //find the spetsific job in arr submitedJobs
            for(var job of user.submitJobs)
            {
                //find the job in arr
                if (job.index == indexJob)
                {
                        if(textBttn == "אשר")
                        {
                            job.status = "אושר"
                            updateCurrent_InAllUsers_Local(user)
                            alert("המועמד אושר בהצלחה!")  
                
                        }else
                            {
                                job.status = "נדחה"
                                updateCurrent_InAllUsers_Local(user)
                                alert("המועמד נדחה!")  
                            }
                    
                }
            }
        }
        
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

// func that update the current user detales at all user arr
function updateCurrent_InAllUsers_Local(equalTo)
{
    for(let user = 0; user < allUsers_arr.length; user++ )
    {
        if(allUsers_arr[user].Email == juniorProfileUser.Email)
        {
            allUsers_arr[user] = equalTo
            localStorage.setItem('allUsers_arr',JSON.stringify(allUsers_arr))
        }
    }
}
