function ResetValidation({ password, confirmPassword }) {
    const errors = {};

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

export default ResetValidation;