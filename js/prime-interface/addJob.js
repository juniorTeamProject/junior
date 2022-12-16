function addJob(e) 
{
    
    let jobs = JSON.parse(localStorage.getItem('jobs')) || []
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {}
    console.log(jobs)
    let compantName = document.querySelector('.JobCompanyName')
    let select_languenge =  document.querySelector('#select_languenge')
    let select_type = document.querySelector('#select_type')
    let select_Knowledge = document.querySelector('#select_Knowledge')
    let select_JobField = document.querySelector('#select_JobField')
    let select_LocationJob = document.querySelector('#select_LocationJob')
    let jobDescription = document.querySelector('.jobDescription')
    
    jobs.push(
        {
        img:currentUser.img,
        name: compantName.value,
        location: select_LocationJob.value,
        type: select_type.value,
        field: select_JobField.value,
        information: jobDescription.value,
        languenge: select_languenge.value,
        knowledge: select_Knowledge.value
        }
    )
    localStorage.setItem('jobs',JSON.stringify(jobs))
    alert("משרה הוספה בהצלחה!")
    e.preventDefault();
}



//choose image in signup from file
function pickImage(input) {    
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      
      reader.onload = function (e) {
        let url = e.target.result;
      $('.imageFile').attr('src', url).width(100).height(90);
      localStorage.setItem('userImg',url);
      console.log(e.target.result);

      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }



  function signOut(e) {
    // reset currentUser
    currentUser = {};
    localStorage.setItem("currentUser",JSON.stringify(currentUser));
    console.log(currentUser);
    // move to Home.html
    window.location.assign("/screens/home.html");
    e.preventDefault();  
  }