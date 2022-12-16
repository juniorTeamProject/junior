

let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let numOfOfferJobs = JSON.parse(localStorage.getItem('numOfOfferJobs')) || 0

let jobs = JSON.parse(localStorage.getItem('jobs')) || []

console.log(jobs.length)
console.log(numOfOfferJobs)





showJobs()
    


function showJobs()
{
    
    if(jobs.length > 0)
    {
        for (var j of jobs) {
      
            if(currentUser.LocationJob == j.location
                && currentUser.JobType == j.type
                && currentUser.JobField == j.field
                )
            {  
                
                document.querySelector('.noJobsToShow').style.display = "none"
                numOfOfferJobs +=1
                var job = new Job(j.img,j.name,j.location,j.field,j.type,j.information)
                job.addToHtml()
               
                
                
                
            }
        }
    
        if(numOfOfferJobs == 0)
        {
            document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
            document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שמותאמות לך'
        }
    }
    
   
}
