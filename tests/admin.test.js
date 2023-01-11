import {describe,it,expect} from 'vitest'

let admins_arr = [
    {
    UserType: "Admin",
    Name: "Omer",
    Email: "omcl97@gmail.com",
    Password: "123456",
    },
    {
    UserType: "Admin",
    Name: "Matan",
    Email: "matanka7@gmail.com",
    Password: "123456",
    },
    {
    UserType: "Admin",
    Name: "Sahar",
    Email: "sahargabay@gmail.com",
    Password: "123456",
    },
    {
    UserType: "Admin",
    Name: "Ofek",
    Email: "ofekatayak@gmail.com",
    Password: "123456",
    }
]

let users = [
    {
        UserType: "Admin",
        Name: "Omer",
        Email: "omcl97@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Matan",
        Email: "matanka7@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Sahar",
        Email: "sahargabay@gmail.com",
        Password: "123456",
        },
        {
        UserType: "Admin",
        Name: "Ofek",
        Email: "ofekatayak@gmail.com",
        Password: "123456",
        },
    {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'intel@gmail.com',
        Password: '123456',
        img: '_img',
        postedJobs:[]
    },
    {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'dell@gmail.com',
        Password: '123456',
        img: '_img',
        postedJobs:[]
    }
]

let blockUsers = [
    {
        UserType: "Prime",
        Package: "Bronze",
        CompanyName: 'intel',
        Email: 'intel@gmail.com',
        Password: '123456',
        img: '_img',
        postedJobs:[]
    },
]

function admin_Permission(email,name,pass){
    let exist = (admins_arr.length && 
        admins_arr.some(data => data.Email.toLowerCase() == email));
    if(exist){
        // user already exist
           return false;
    }
    else{
        admins_arr.push(
            {
            UserType: "Admin",
            Name: name,
            Email: email,
            Password: pass,
            });
            // function succeed
            return true;
        }
}

function deleteUser(email){
    let exist = (users.length && 
        users.some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        let temp = users.filter(item => item.Email != email);
        users = temp;
        // user was deleted
        return true
    }
    else{
        // user was not found by the email
        return false;
    }
}

function BlockUser(email){
    let exist = (users.length && 
        users.some(data => data.Email.toLowerCase() == email));
    if(exist){
        let user = users.filter(item => item.Email == email);
        blockUsers.push(
            {
            UserType: user[0].UserType,            
            Name: user[0].Name || user[0].CompanyName,           
            Email: email,
            });
        // user was blocked
        return true
    }
    else{
        // user not in  the system
    }
}

function removeBlock(email){
    let exist = (users.length && 
        users.some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        let newArray = blockUsers.filter(item => item.Email != email);
        blockUsers = newArray
        // user block was removed
        return true
    }
    else{
        //user not in the system
        return false
    }
}

function upgradePlan(email, plan){
    let exist = (users.length && 
        users.some(data => data.Email.toLowerCase() == email));
    
    if(exist){
        for (let i = 0; i < users.length; i++) {
            if (users[i].Email == email){
                users[i].Package = plan; 
            }
        }
        return plan
        // prime user was upgrade
    }
    else{
        // prime user not in the system
        return false
    }
}

describe('admin_Permission',()=>{
    it('user get admin permission',()=>{
        expect(admin_Permission('tal@gmail.com','Tal','123456')).toBe(true)
    })
})

describe('deleteUser',()=>{
    it('user exist should be deleted',()=>{
        expect(deleteUser('dell12@gmail.com')).toBe(false)
    })
})

describe('BlockUser',()=>{
    it('user exist should be block',()=>{
        expect(BlockUser('dell@gmail.com')).toBe(true)
    })
})

describe('removeBlock',()=>{
    it('user blocked should be removed',()=>{
        expect(removeBlock('intel@gmail.com')).toBe(true)
    })
})

describe('upgradePlan',()=>{
    it('prime user will be upgrade',()=>{
        expect(upgradePlan('dell@gmail.com','Gold')).toBe('Gold')
    })
})