function EmailValidation({ email }) {
    const errors = {};

    if(!email.length)
        errors.email = "Email field can't be empty";
    else if(!(/^[^\W]([\w]{6,})@([a-zA-Z]{3,6})\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,4})?$/ig).exec(email))
        errors.email = "Email is invalid. Please add a valid email";

    return errors;
}

export default EmailValidation;