// login bttn - func to open\close the popUp
 var toggle = false;

function toggleLogin() {
    if(toggle == false){
        document.querySelector(".wrapper-popUp-login").style.display = "flex";
        toggle = true;
    }else{
        document.querySelector(".wrapper-popUp-login").style.display = "none";
        toggle = false;
    }
   

  }