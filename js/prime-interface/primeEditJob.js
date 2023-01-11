

let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let jobs = JSON.parse(localStorage.getItem('jobs'));
let index = JSON.parse(localStorage.getItem('Jobindex'));
let job = currentUser.postedJobs.filter(item => item.index == parseInt(index));

//job data
document.querySelector(".JobCompanyName").value = job[0].name
document.querySelector("#select_languenge").value = job[0].languenge
document.querySelector("#select_type").value = job[0].type
document.querySelector("#select_Knowledge").value = job[0].knowledge
document.querySelector("#select_JobField").value = job[0].field
document.querySelector("#select_LocationJob").value = job[0].location
document.querySelector(".jobDescription").value = job[0].information

let companyName = document.querySelector(".JobCompanyName")
let languenge = document.querySelector("#select_languenge")
let type = document.querySelector("#select_type")
let knowledge = document.querySelector("#select_Knowledge")
let field = document.querySelector("#select_JobField")
let locationJob = document.querySelector("#select_LocationJob")
let information = document.querySelector(".jobDescription")



//----------------- Edit Job-----------/////
function editJob(e){
    for (let i = 0; i < currentUser.postedJobs.length; i++) {
        if (currentUser.postedJobs[i].index == parseInt(index)) {
            if(companyName.value != currentUser.postedJobs[i].name && companyName.value != ""){
                currentUser.postedJobs[i].name = companyName.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"CompanyName",companyName.value);
                updateJob("CompanyName",companyName.value);
            }
            if(languenge.value != currentUser.postedJobs[i].languenge && languenge.value != ""){
                currentUser.postedJobs[i].languenge = languenge.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"languenge",languenge.value);
                updateJob("languenge",languenge.value);
            }
            if(type.value != currentUser.postedJobs[i].type && type.value != ""){
                currentUser.postedJobs[i].type = type.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"type",type.value);
                updateJob("type",type.value);
            }
            if(knowledge.value != currentUser.postedJobs[i].knowledge && knowledge.value != ""){
                currentUser.postedJobs[i].knowledge = knowledge.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"knowledge",knowledge.value);
                updateJob("knowledge",knowledge.value);
            }
            if(field.value != currentUser.postedJobs[i].field && field.value != ""){
                currentUser.postedJobs[i].field = field.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"field",field.value);
                updateJob("field",field.value);
            }
            if(locationJob.value != currentUser.postedJobs[i].location && locationJob.value != ""){
                currentUser.postedJobs[i].location = locationJob.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"locationJob",locationJob.value);
                updateJob("locationJob",locationJob.value);
            }
            if(information.value != currentUser.postedJobs[i].field && information.value != ""){
                currentUser.postedJobs[i].information = information.value;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateUser(currentUser.Email,"information",information.value);
                updateJob("information",information.value);
            }

        }
        
    }
}

function updateJob(info, value){
    for (let j = 0; j < jobs.length; j++){
        if(jobs[j].index == parseInt(index))
            if(info == "CompanyName"){
                jobs[j].name = value; 
            }
            if(info == "languenge"){
                jobs[j].languenge = value; 
            }
            if(info == "type"){
                jobs[j].type = value; 
            }
            if(info == "knowledge"){
                jobs[j].knowledge = value; 
            }
            if(info == "field"){
                jobs[j].field = value; 
            }
            if(info == "locationJob"){
                jobs[j].location = value; 
            }
            if(info == "information"){
                jobs[j].information = value; 
            }
        }
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function updateUser(email,info, value){
    for (let i = 0; i < allUsers_arr.length; i++) {
        if (allUsers_arr[i].Email == email){
            for (let j = 0; j < allUsers_arr[i].postedJobs.length; j++){
                if(allUsers_arr[i].postedJobs[j].index == parseInt(index))
                    if(info == "CompanyName"){
                        allUsers_arr[i].postedJobs[j].CompanyName = value; 
                    }
                    if(info == "languenge"){
                        allUsers_arr[i].postedJobs[j].languenge = value; 
                    }
                    if(info == "type"){
                        allUsers_arr[i].postedJobs[j].type = value; 
                    }
                    if(info == "knowledge"){
                        allUsers_arr[i].postedJobs[j].knowledge = value; 
                    }
                    if(info == "field"){
                        allUsers_arr[i].postedJobs[j].field = value; 
                    }
                    if(info == "locationJob"){
                        allUsers_arr[i].postedJobs[j].locationJob = value; 
                    }
                    if(info == "information"){
                        allUsers_arr[i].postedJobs[j].information = value; 
                    }
                }
        }  
    }
    localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
}

