function TicketSupportValidation({ subject, message }) {
    const errors = {};
    console.log(subject, message);

    if(!subject.length) 
        errors.subject = "Username can't be empty";

    if(!message.length)
        errors.message = "Message can't be empty";
    
    return errors;
}

export default TicketSupportValidation;