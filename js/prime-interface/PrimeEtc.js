// ------------------Prime Contact Us--------------------------//

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


var toggle1 = false;
function toggleCOntact() 
{
   if(toggle1 == false){
       document.querySelector(".popUp").style.display = "flex";
       toggle1 = true;
   }else{
       document.querySelector(".popUp").style.display = "none";
       toggle1 = false;
   }
}

// make the popUp of requestUsers to fix and steak to top at scrolling
let popup = document.querySelector('.popUp')
window.addEventListener('scroll', function() {
  // If the pop-up is visible, keep it fixed at the top of the page
  if (popup.style.display === 'flex') {
    popup.style.top = window.pageYOffset + 'px';
  }
});