let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))
let currentUser = JSON.parse(localStorage.getItem('currentUser'))
let contactUs = JSON.parse(localStorage.getItem('contactUs')) || [] // all msgs in the system


showMsgs() // show to the user msgs


function showMsgs()
{
    let flag = 0
    if(contactUs.length > 0 )
    {
        
        for (var j of contactUs) {
                flag = 1
                // let index = j.index // current index of the current msg
                document.querySelector('.noMsgsToShow').style.display = "none"
                var msg = new Contact(j.UserType,j.Email,j.Msg, j.Subject)  // crate msg
                msg.addToHtml() // add the current msg to user interface 
            }
        }
    // if there is no offer jobs show to user image and txt that he has not offers job
    if( contactUs.length == 0|| contactUs == null || flag == 0 )
    {
        document.querySelector('.ImgNoJobs').setAttribute('src','/images/noJobsToShow.png')
        document.querySelector('.allMsg').innerHTML = 'אין פניות לאתר כרגע'
        
    }
     
}




function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }