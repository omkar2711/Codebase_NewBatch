const validateLogin = (username, password) => {
    try{
        if(username.length < 5){
            throw new Error("Username must be more that 5 characters");
        }
        if(password.length < 8){
             throw new Error("password must be more that 8 characters");
        }
        let patter1 = /[0-9]/;

        if(!patter1.test(password)){
            throw new Error("password should contains digits");
        }
        let pattern2 = /[a-z]/;

        if(!pattern2.test(password)){
             throw new Error("password should contains characters");
        }

        console.log(username, password)


    }
    catch(err){
        console.log(err.message);
    }
}

validateLogin("abcdefg", "abcdefg");
validateLogin("abcdefg", "123456789");
validateLogin("abcdefg", "123");
validateLogin("abcdefg" , "abcd12345");
