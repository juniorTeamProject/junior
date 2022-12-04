
//FireBase
const firebaseConfig = {
  apiKey: "AIzaSyCYZ9IilLKt4bZUOid185CDfwzuYMDv6yE",
  authDomain: "junior-3c64f.firebaseapp.com",
  projectId: "junior-3c64f",
  storageBucket: "junior-3c64f.appspot.com",
  messagingSenderId: "1003928300183",
  appId: "1:1003928300183:web:ed8b6aa96a339a048257d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




// choose image in signup from file
function pickImage(input) {    
    document.querySelector('.logoTxt').innerHTML = '';  // clean logo txt
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#imageFile').attr('src', e.target.result).width(100).height(90);
        console.log(e.target.result);
      };
      
      reader.readAsDataURL(input.files[0]);
    }
  }

  
   
  

