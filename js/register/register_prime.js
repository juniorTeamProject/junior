
// choose image in signup from files
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

    
   
  