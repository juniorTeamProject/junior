import {describe,it,expect} from 'vitest'

let users = []

function signUp_Prime(_companyName, _email_prime, _password_prime, _img)
{

    
      let exist = (users.length && users.some(data => data.Email.toLowerCase() == _email_prime)); 
        
      //if user NOT exist add the user to joniors_arr and save local
      if(!exist){
        allUsers_arr.push(
          {
           UserType: "Prime",
           Package: "Bronze",
           CompanyName: _companyName,
           Email: _email_prime,
           Password: _password_prime,
           img: _img,
           postedJobs:[]
          });
         // save data at local
         localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr)); // save to all users
         currentUser = allUsers_arr[indexUsers];
         localStorage.setItem('currentUser', JSON.stringify(currentUser));
         indexUsers += 1;
         localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
         //-----
         document.querySelector('#signUp_prime_form').reset();
         document.getElementById('companyName').focus();
         alert("נרשמת בהצלחה!");
         window.location.assign("/screens/after-Login/primeAfterLogIn.html"); 
         return true;
      } else {
        // ERROR - user exist
        alert( "משתמש זה קיים במערכת.\nאנא הרשם מחדש או התחבר בדף הראשי.");
        return false;
      }
}

function sum(a,b)
{
    return a+b
}




describe('#sum',()=>{
    it('should sum',()=>{
        expect(sum(3,2)).toBe(5)
    })
})