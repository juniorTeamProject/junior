let currentUser = JSON.parse(localStorage.getItem('currentUser'));

console.log(currentUser)
document.querySelector('.photoProfile').setAttribute("src",currentUser.img)
document.querySelector('.userName').innerHTML = currentUser.Name
document.querySelector('.email').innerHTML = currentUser.Email
document.querySelector('.languange').innerHTML = currentUser.Langunge
document.querySelector('.jobScope').innerHTML = currentUser.JobScope
document.querySelector('.jobType').innerHTML = currentUser.JobType
document.querySelector('.Knowledge').innerHTML = currentUser.Knowledge
document.querySelector('.JobField').innerHTML = currentUser.JobField
document.querySelector('.LocationJob').innerHTML = currentUser.LocationJob
