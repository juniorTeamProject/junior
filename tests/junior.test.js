import {describe,it,expect} from 'vitest'

let users = [
    {
        UserType: "Admin",
        Name: "Omer",
        Email: "omcl97@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Matan",
        Email: "matanka7@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Sahar",
        Email: "sahargabay@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Ofek",
        Email: "ofekatayak@gmail.com",
        Password: "123456",
        },
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
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'dell@gmail.com',
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
    },
    { 
        UserType: "Junior",
        Name: 'Omer',
        Email: 'omer12@gmail.com',
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

let contactUs = []

function updateJunior(email,whatEdit,newVal)
{

    for (let i = 0; i < users.length; i++){
        if (users[i].Email == email){
            if (whatEdit == 'name')
                users[i].Name = newVal
            if (whatEdit == 'email')
                users[i].Email = newVal
            if (whatEdit == 'pass')
                users[i].Password = newVal
            if (whatEdit == 'langunge')
                users[i].Langunge = newVal
            if (whatEdit == 'jobScope')
                users[i].JobScope = newVal
            if (whatEdit == 'jobType')
                users[i].JobType = newVal
            if (whatEdit == 'knowledge')
                users[i].Knowledge = newVal
            if (whatEdit == 'jobField')
                users[i].JobField = newVal
            if (whatEdit == 'locationJob')
                users[i].LocationJob = newVal
            if (whatEdit == 'img')
                users[i].img = newVal
            // user info was changed
            return true
        }
    }
}

function contact_Us(userType, email, subject, msg){
    contactUs.push(
        {
        UserType: userType,                     
        Email: email,
        Subject: subject,
        Msg: msg
        });
        // msg was sent
        return true;
    }


describe('updateJunior',()=>{
    it('update Junior info',()=>{
        expect(updateJunior('intel@gmail.com','langunge','C++')).toBe(true)
    })
})

describe('contact_Us',()=>{
    it('Junior msg',()=>{
        expect(contact_Us('Junior','intel@gmail.com','התעניינות','אשמח שתחזרו אליי.')).toBe(true)
    })
})