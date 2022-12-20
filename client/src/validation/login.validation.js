function LoginValidation({ username, password, check }) {
    const errors = {};

    if(!username.length) 
        errors.username = "Username can't be empty";

    if(!password.length) 
        errors.password = "Password can't be empty"
    else if(password.length < 6) 
        errors.password = "Password length can't be less than 6";
    
    return errors;
}

export default LoginValidation;