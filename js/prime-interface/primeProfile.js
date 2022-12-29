let currentUser = JSON.parse(localStorage.getItem('currentUser'));
let allUsers_arr = JSON.parse(localStorage.getItem('allUsers_arr'))  ||[]; 

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





