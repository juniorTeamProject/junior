let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let numOfOfferJobs = JSON.parse(localStorage.getItem('numOfOfferJobs')) || 0
let offerJobs_arr = JSON.parse(localStorage.getItem('offerJobs_arr')) || []
let jobs = JSON.parse(localStorage.getItem('jobs')) || []


console.log(numOfOfferJobs)
console.log(offerJobs_arr.length)


for(var j of jobs)
{
    if(currentUser.LocationJob == j.location
        && currentUser.JobType == j.type
        && currentUser.JobField == j.field)
    {
        offerJobs_arr.push(j)
        localStorage.setItem('offerJobs_arr',JSON.stringify(offerJobs_arr))
        
    }
}

if(numOfOfferJobs != offerJobs_arr.length)
{
    showJobs() 
}else{
    if(numOfOfferJobs == 0)
    {
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שמותאמות לך'
    }
    for (var j of offerJobs_arr)
    {
        document.querySelector('.noJobsToShow').style.display = "none"
        var job = new Job(numOfOfferJobs,j.img,j.name,j.location,j.field,j.type,j.information)
        job.addToHtml()
    }
}  

    
    


function showJobs()
{
    
    let numOfOfferJobs = JSON.parse(localStorage.getItem('numOfOfferJobs')) || 0
    for (var j of jobs) {
      
        if(currentUser.LocationJob == j.location
            && currentUser.JobType == j.type
            && currentUser.JobField == j.field)
        {  
            
            document.querySelector('.noJobsToShow').style.display = "none"
            numOfOfferJobs +=1
            var job = new Job(numOfOfferJobs,j.img,j.name,j.location,j.field,j.type,j.information)
            job.addToHtml()
            offerJobs_arr.push(job)
            localStorage.setItem('offerJobs_arr',JSON.stringify(offerJobs_arr))
            localStorage.setItem("numOfOfferJobs",numOfOfferJobs)
            
        }
    }

    if(numOfOfferJobs == 0)
    {
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
        document.querySelector('.txtNoJobs').innerHTML = 'עדיין אין משרות שמותאמות לך'
    }
   
}
function likeBttn() 
{
    
    
}