
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
///---------------Cant back if not log in---------------------
if(currentUser.Name == null && currentUser.CompanyName == null && window.location.href != "http://127.0.0.1:5500/screens/home.html"){
   window.location.assign("/screens/home.html");
}
///---------------Cant back if not log in---------------------
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[];


document.querySelector('.photoProfile').setAttribute("src",currentUser.img) 
document.querySelector(".companyName").innerHTML = currentUser.CompanyName
document.querySelector(".email").innerHTML = currentUser.Email

document.querySelector("#packageName").innerHTML = currentUser.Package
if (currentUser.Package == "Bronze")
{
    document.querySelector("#count").innerHTML = 'עד 100'
    document.querySelector("#price").innerHTML = '499'
}
else if(currentUser.Package == "Silver")
{
    document.querySelector("#count").innerHTML = 'עד 10'
    document.querySelector("#price").innerHTML = '199'
}
else if(currentUser.Package == "Gold")
{
    document.querySelector("#count").innerHTML = 'ללא הגבלה'
    document.querySelector("#price").innerHTML = '599'
}





