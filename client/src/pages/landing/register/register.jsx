import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerAuthApi, encryptionKey } from '../../../config';
import encryptData from '../../../assets/_helpers/encrypt-data';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import RegistrationValidation from '../../../validation/registration.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry,
    RequestMessageBox
} from '../../../components';

function Register() {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState({
        type: '',
        message: ''
    });

    function registerUser(e) {
        e.preventDefault();

        setErrors(RegistrationValidation({
            username, 
            email,
            password,
            confirmPassword
        }));

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            const user = {
                username,
                email,
                password,
            };

            setTimeout(() => {
                axios.post(registerAuthApi, user)
                    .then(({ data }) => {
                        const { status, user, message } = data;

                        if(status === "success") {
                            // Encrypt user data
                            const encryptUser = encryptData(user, encryptionKey);

                            sessionStorage.setItem("token", JSON.stringify(encryptUser));

                            setCurrentUser(user);


                            // Empty input fields
                            setUsername("");
                            setEmail("");
                            setPassword("");

                            // Set message
                            setResponseMessage({ ...responseMessage, type: 'success', message: ''});
                            console.log(user);

                            // navigate('/dashboard')
                        } else {
                            // Set message
                            setResponseMessage({ ...responseMessage, type: 'error', message});
                        }
                    })
                    .catch(error => {
                        // setCurrentUser to null
                        setCurrentUser(null);

                        // Set message
                        setResponseMessage({ ...responseMessage, type: 'error', message: "There was a network issue"});
                    });   
            }, 500);
        }
    }, [errors, formIsSubmitted, username, email, password, setCurrentUser, navigate, responseMessage, setUsername, setEmail, setPassword]);

    
    return (
        <FormContainer  
            headerText="Sign up"
            subHeaderText="Get the most out of it"
            submitForm={registerUser}
        >
            {/* Request Error */}
            {responseMessage.message && 
                <RequestMessageBox 
                    message={responseMessage?.message}
                    type={responseMessage?.type} 
                    style={{ "marginBottom": '1rem' }}/>}

            <FormInput
                type="text"
                name="username"
                label="Username"
                value={username}
                handleChange={({ target }) => setUsername(target.value)}
                error={errors?.username}
            />

            <FormInput
                type="text"
                name="email"
                label="Email"
                value={email}
                handleChange={({ target }) => setEmail(target.value)}
                error={errors?.email}
            />

            <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                handleChange={({ target }) => setPassword(target.value)}
                error={errors?.password}
            />

            <FormInput
                type="password"
                name="confirm_password"
                label="Confirm password"
                value={confirmPassword}
                handleChange={({ target }) => setConfirmPassword(target.value)}
                error={errors?.confirmPassword}
            />

            <Button 
                variant="primary"
                style={{ width: '100%' }}
            >
                Sign up
            </Button>   

            <AuthEnquiry 
                enquiry="Already have an account" 
                enquiryPage="Sign in"
                route="/login"
            />
        </FormContainer>
    )
}

export default Register;