//-------------------------------ADMIN-------------------------------------
let AdminsSetup = JSON.parse(localStorage.getItem('AdminsSetup')) || 0

if (AdminsSetup == 0){
    let admins_arr = []; // all Admin users
    let indexAdmin = 0; // the index and number of Admins
    let indexUsers = 0 // all users index
    let _emailAdmin, _name;
  
    for (let i = 0; i < 4; i++) {
      if (i == 0){
        _emailAdmin = "omcl97@gmail.com";
        _name = "Omer";
      }
      if (i == 1){
        _emailAdmin = "matanka7@gmail.com";
        _name = "Matan";
      }
      if (i == 2){
        _emailAdmin = "sahargabay@gmail.com";
        _name = "Sahar";
      }
      if (i == 3){
        _emailAdmin = "ofekatayak@gmail.com";
        _name = "Ofek";
      }
      admins_arr.push(
        {
        UserType: "Admin",
        Name: _name,
        Email: _emailAdmin,
        Password: "123456",
        });
      allUsers_arr.push(
        {
        UserType: "Admin",
        Name: _name,
        Email: _emailAdmin,
        Password: "123456",
        });
      AdminsSetup = 1;
      indexAdmin +=1;
      indexUsers += 1;
      localStorage.setItem('indexUsers', JSON.stringify(indexUsers));
      localStorage.setItem('AdminsSetup', JSON.stringify(AdminsSetup));
      localStorage.setItem('indexAdmin', JSON.stringify(indexAdmin));
      localStorage.setItem('admins_arr', JSON.stringify(admins_arr));
      localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
    }
  }
  
  //----------------------------------------END ADMIN--------------------------------