import {describe,it,expect} from 'vitest'

// all users in system
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

// blocked user
let blockUsers = [
    {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'dell@gmail.com',
        Password: '123456',
        img: '_img',
        postedJobs:[]
    }
]

let currentUser = {}

function signUp_Prime(_companyName, _email_prime, _password_prime, _img)
{
    let exist = (users.length && users.some(user => user.Email.toLowerCase() == _email_prime)); 
        
      //if user NOT exist add the user to joniors_arr and save local
      if(!exist)
      {
        users.push(
        {
           UserType: "Prime",
           Package: "Bronze",
           CompanyName: _companyName,
           Email: _email_prime,
           Password: _password_prime,
           img: _img,
           postedJobs:[]
        });
         return true;
      } else
       {
        // ERROR - user exist
        return false;
      }
}

function signUp_Junior(_fullName, _email_junior, _password_junior, _langunge, _jobScope, _jobType, _knowledge, _jobField, _locationJob, _img)
{

    let exist = (users.length && users.some(user => user.Email.toLowerCase() == _email_junior)); 
        
    //if user NOT exist add the user to joniors_arr and save local
    if(!exist)
    {
      users.push(
        { 
             UserType: "Junior",
             Name: _fullName,
             Email: _email_junior,
             Password: _password_junior,
             Langunge : _langunge,
             JobScope: _jobScope,
             JobType: _jobType,
             Knowledge: _knowledge,
             JobField: _jobField,
             LocationJob: _locationJob,
             img:_img,
             likedJobs:[],
             submitJobs:[]
      });
       return true;
    } else
     {
      // ERROR - user exist
      return false;
    }
}

function signIn(email,password)
{
    // if user ia blocked
    let block = blockUsers.filter(user => user.Email == email) || 0;
    if(block != 0){
        return false;
    }
    // check if user exist
    let exist = (users.length && users.some(data => data.Email.toLowerCase() == email && data.Password.toLowerCase() == password));
    
    //user not exist
    if(!exist){
        return false
    }
    else{
        return true
    }
}

function signOut() {
    // reset currentUser
    currentUser = {};
    // check if no currentUser
    if (currentUser.Name == null)
        return true
}



// signUp --- Prime
describe('#signUp_Prime',()=>{
    it('Prime exist should not add the user',()=>{
        expect(signUp_Prime('intel','intel@gmail.com','123456','images/prime_logo.png')).toBe(false)
    })
})

describe('#signUp_Prime',()=>{
    it('Prime Not exist should  add the user',()=>{
        expect(signUp_Prime('intel','facebook@gmail.com','123456','images/prime_logo.png')).toBe(true)
    })
})


// signUp --- Junior
describe('#signUp_Junior',()=>{
    it('Junior exist should not add the user',()=>{
        expect(signUp_Junior('matan','transfer@gmail.com','123456','java','מלאה','סטודנט','תואר ראשון','אוטומצייה','דרום','images/junior_logo.png')).toBe(false)
    })
})

describe('#signUp_Junior',()=>{
    it('Junior Not exist should  add the user',()=>{
        expect(signUp_Junior('matan','matan@gmail.com','123456','java','מלאה','סטודנט','תואר ראשון','אוטומצייה','דרום','images/junior_logo.png')).toBe(true)
    })
})


// signIn any user
describe('signIn',()=>{
    it('user exist should log in',()=>{
        expect(signIn('intel@gmail.com','123456')).toBe(true)
    })
})

// sign out any user
describe('signOut',()=>{
    it('user will log out',()=>{
        expect(signOut()).toBe(true)
    })
})


