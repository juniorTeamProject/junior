//-------------------------------ADMIN-------------------------------------
if (AdminsSetup == 0){
    let admins_arr = []; // all Admin users
    let indexCurrentAdmin = 0; // the index and number of Admins
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
      indexCurrentAdmin+=1;
      localStorage.setItem('AdminsSetup', JSON.stringify(AdminsSetup));
      localStorage.setItem('indexAdmin', JSON.stringify(indexCurrentAdmin));
      localStorage.setItem('admins_arr', JSON.stringify(admins_arr));
      localStorage.setItem('allUsers_arr', JSON.stringify(allUsers_arr));
      console.log(admins_arr[indexCurrentAdmin]);
    }
  }
  
  //----------------------------------------END ADMIN--------------------------------