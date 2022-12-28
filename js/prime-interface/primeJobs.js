// login bttn - func to open\close the popUp
var toggle = false;
function toggleReq_popUp() 
{
   if(toggle == false){
       document.querySelector(".wrapper-popUp-REQUEST").style.display = "flex";
       toggle = true;
   }else{
       document.querySelector(".wrapper-popUp-REQUEST").style.display = "none";
       toggle = false;
   }
}