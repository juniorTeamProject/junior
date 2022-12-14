let currentUser = JSON.parse(localStorage.getItem('currentUser'))

if(currentUser){
    document.querySelector("#name").value = currentUser.Name
    document.querySelector("#email").value = currentUser.Email
    document.querySelector("#password").value = currentUser.Password
    
  
}
