// ------------------Junior Contact Us--------------------------//

let contactUs = JSON.parse(localStorage.getItem('contactUs')) ||[];
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let msg;

function contact_Us(){
    contactUs.push(
        {
        UserType: currentUser.UserType,            
        Name: currentUser.Name,           
        Email: currentUser.Email,
        Msg: msg
        });
    localStorage.setItem('contactUs', JSON.stringify(contactUs));
    alert( "הפנייה נמסרה!");
}

// ------------------Junior Contact Us--------------------------//


var toggle = false;
function toggleLogin() 
{
   if(toggle == false){
       document.querySelector(".popUp").style.display = "flex";
       toggle = true;
   }else{
       document.querySelector(".popUp").style.display = "none";
       toggle = false;
   }
}