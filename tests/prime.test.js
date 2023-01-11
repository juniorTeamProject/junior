import {describe,it,expect} from 'vitest'

let users = [
    {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'intel@gmail.com',
        Password: '123456',
        img: '_img',
        postedJobs:[]
    },
    { 
        UserType: "Junior",
        Name: 'matan',
        Email: 'transfer@gmail.com',
        Password: '123456',
        Langunge : 'java',
        JobScope: 'מלאה',
        JobType: 'סטודנט',
        Knowledge: 'תואר ראשון',
        JobField: 'אוטומציה',
        LocationJob: 'דרום',
        img:'_img',
        likedJobs:[],
        submitJobs:[]
    }
]

let jobs = [
    {
        index: '0',
        img:'img',
        name: 'intel',
        scope:'מלאה',
        location: 'דרום',
        type: 'פרונטלית',
        field: 'אוטומצייה',
        information: 'תיאור',
        languenge: 'java',
        knowledge: 'תואר ראשון',
        requestJuniors:[],
        reqInPopUp:[],
        status:"ממתין..."
    } 
    
]

function addJob(id,img,name,scope,location,_type,_field,info,_languenge,_knowledge) 
{    
    let job = {
      index: id,
      img:img,
      name: name,
      scope:scope,
      location: location,
      type: _type,
      field: _field,
      information: info,
      languenge: _languenge,
      knowledge: _knowledge,
      requestJuniors:[],
      reqInPopUp:[],
      status:"ממתין..."
    } 
    let exist = (jobs.length && jobs.some(job => job.index == id)); 
    if(!exist)
    {
        jobs.push(job)  // push the new job to all jobs_arr in system 
        return true
    }
    return false;
    

}

function editJob(id,whatEdit,newVal)
{
    let intId = parseInt(id)
    let exist = (jobs.length && jobs.some(job => job.index == id)); 
    if(exist)
    {   
        if (whatEdit == 'scope')
        {
            jobs[intId].scope = newVal
        }
        else if (whatEdit == 'location')
        {
            jobs[intId].location = newVal
        }
        else if (whatEdit == 'type')
        {
            jobs[intId].type = newVal
        }
        else{
            return false
        }
        return true
    }
    return false
    

   
}

function editProfile(email,whatEdit,newVal)
{
    let exist = (users.length && users.some(user => user.Email == email && user.UserType == 'Prime')); 
    if(exist)
    {   
        // find the user index in users arr by email
        const index =  users.findIndex(user => user.Email === email);
            
        if (whatEdit == 'CompanyName')
        {
            users[index].CompanyName = newVal
        }
        else if (whatEdit == 'Password')
        {
            users[index].Password = newVal
        }
        else if (whatEdit == 'img')
        {
            users[index].img = newVal
        }
        else if (whatEdit == 'Package')
        {
            users[index].Package = newVal
        }
        else return false
        return true
    }

    return false
}

function deleteJob(id)
{
    let exist = (jobs.length && jobs.some(job => job.index == id )); 
    if(exist)
    {
        jobs.splice(id,1)
        return true
    }
    return false
}


// addJob --- Prime
describe('#addJob',()=>{
    it('Prime add job - try to add job with id that exist - NOT should work',()=>{
        expect(addJob('0','img','intel','מלאה','דרום','פרונטלית','אוטומצייה','תיאור','java','תואר ראשון')).toBe(false)
    })
})
describe('#addJob',()=>{
    it('Prime add job - try to add job with unic id  - should work',()=>{
        expect(addJob('1','img','intel','מלאה','דרום','פרונטלית','אוטומצייה','תיאור','java','תואר ראשון')).toBe(true)
    })
})

// editJob --- Prime
describe('#editJob',()=>{
    it('Prime edit job - try to edit job field with id that NOT exist - NOT should work',()=>{
        expect(editJob('3','type','חלקית')).toBe(false)
    })
})

describe('#editJob',()=>{
    it('Prime edit job - try to edit job field with id that exist - should work',()=>{
        expect(editJob('0','type','חלקית')).toBe(true)
    })
})

// editProfile --- Prime
describe('#editProfile',()=>{
    it('Prime edit profile - try to edit profile field with email that exist - should work',()=>{
        expect(editProfile('intel@gmail.com','CompanyName','facebook')).toBe(true)
    })
})
describe('#editProfile',()=>{
    it('Prime edit profile - try to edit profile field with email that NOT exist - NOT should work',()=>{
        expect(editProfile('indtel@gmail.com','CompanyName','facebook')).toBe(false)
    })
})

// deleteJob --- Prime
describe('#deleteJob',()=>{
    it('Prime delete job - try to delete job by id that exist -  should work',()=>{
        expect(deleteJob('0')).toBe(true)
    })
})
describe('#deleteJob',()=>{
    it('Prime delete job - try to delete job by id that NOT exist - NOT should work',()=>{
        expect(deleteJob('4')).toBe(false)
    })
})
