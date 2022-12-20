import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginAuthApi, encryptionKey } from '../../../config';
import encryptData from '../../../assets/_helpers/encrypt-data';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import LoginValidation from '../../../validation/login.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry,
    RequestMessageBox
} from '../../../components';
import { 
    LoginFeature,
    LoginFeatureRemember,
    LoginRememberText,
    ForgotPasswordText 
} from './login.styles';


function Login() {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [errors, setErrors] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState({
        type: '',
        message: ''
    });

    function loginUser(e) {
        e.preventDefault();

        setErrors(LoginValidation({
            username, 
            password
        }));

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
            const user = {
                username,
                password,
                check
            };

            setTimeout(() => {
                axios.post(loginAuthApi, user)
                    .then(({ data }) => {
                        const { status, user, message } = data;

                        if(status === "success") {
                            // Encrypt user data
                            const encryptUser = encryptData(user, encryptionKey);

                            sessionStorage.setItem("token", JSON.stringify(encryptUser));

                            setCurrentUser(user);
                            
                            // Empty input fields
                            setUsername("");
                            setPassword("");

                            setResponseMessage({ ...responseMessage, type: '', message: '' });

                            // Navigate to dashboard
                            navigate("/dashboard");
                        } else {
                            // setCurrentUser to null
                            setCurrentUser(null);

                            setResponseMessage({ ...responseMessage, type: 'error', message});
                        }
                    })
                    .catch(error => {
                        // setCurrentUser to null
                        setCurrentUser(null);

                        setResponseMessage({ type: 'error', message: error })
                    });   
            }, 500);
        }
    }, [errors, formIsSubmitted, username, password, setCurrentUser, responseMessage, setResponseMessage, navigate, setUsername, setPassword, check]);

    return (
        <FormContainer  
            headerText="Log in"
            subHeaderText="to your account"
            submitForm={loginUser}
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
                type="password"
                name="password"
                label="Password"
                value={password}
                handleChange={({ target }) => setPassword(target.value)}
                error={errors?.password}
            />

            <LoginFeature className="d-flex d-j-sbtw d-a-cnt">
                <LoginFeatureRemember className="d-flex d-j-sbtw d-a-cnt">
                    <FormInput
                        type="checkbox"
                        name="login_check"
                        value={check}
                        groupStyle={{ gap: 0 }}
                        handleChange={e => setCheck(!check)}
                    />

                    <LoginRememberText>Remember me</LoginRememberText>
                </LoginFeatureRemember>

                {/* Forgot password Link */}
                <ForgotPasswordText to="/account/password" className="forgot-password gradient-text">Forgot password?</ForgotPasswordText>    
            </LoginFeature>

            <Button 
                variant="primary"
                style={{ width: '100%' }}
            >
                Sign in
            </Button>

            <AuthEnquiry 
                enquiry="Don't have an account" 
                enquiryPage="Sign up"
                route="/register"
            />
        </FormContainer>
    )
}

export default Login;