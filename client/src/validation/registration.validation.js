function RegistrationValidation({ username, email, password, confirmPassword }) {
    const errors = {};

    if(!username.length) 
        errors.username = "Username can't be empty";

    if(!email.length)
        errors.email = "Email field can't be empty";
    else if(!(/^[^\W]([\w]{6,})@([a-zA-Z]{3,6})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,4})?$/ig).exec(email))
        errors.email = "Email is invalid. Please add a valid email";

    if(!password.length) 
        errors.password = "Password can't be empty"
    else if(password.length < 6) 
        errors.password = "Password length can't be less than 6";
    

    if(!confirmPassword.length) 
        errors.confirmPassword = "Confirm password can't be empty";
    else if(confirmPassword.length < 6) 
            errors.confirmPassword = "Password length can't be less than 6";

    if(password !== confirmPassword) 
        errors.confirmPassword = "Password doesn't match";

    return errors;
}

export default RegistrationValidation;