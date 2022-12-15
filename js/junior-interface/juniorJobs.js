let currentUser = JSON.parse(localStorage.getItem('currentUser'))


showJobs()
function showJobs()
{
    
    let numOfJobs = JSON.parse(localStorage.getItem('numOfJobs')) || 0
    for (var j of jobs) {
      
        if(currentUser.LocationJob == j.location
            && currentUser.JobType == j.type
            && currentUser.JobField == j.field)
        {   
            document.querySelector('.noJobsToShow').style.display = "none"
            numOfJobs +=1
            var job = new Job(numOfJobs,j.img,j.name,j.location,j.field,j.type,j.information)
            job.addToHtml()
            localStorage.setItem("numOfJobs",numOfJobs)
            
        }
    }

    if(numOfJobs == 0)
    {
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שמותאמות לך'
    }
   
}

