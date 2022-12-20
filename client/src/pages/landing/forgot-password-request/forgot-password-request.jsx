import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import { forgotPasswordApi } from '../../../config';
import EmailValidation from '../../../validation/email.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry,
    RequestMessageBox,
    SEO
} from '../../../components';
import { ForgotPasswordHeader, ForgotPasswordHeaderText, ForgotPasswordSubHeader, ForgotPasswordNoticeContainer } from '../forgot-password/forgot-password.styles';


function ForgotPasswordRequest() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState({
        type: '',
        message: ''
    });
    const [status, setStatus] = useState(false);
    let content;

    function forgotPassword(e) {
        e.preventDefault();

        setError(EmailValidation({ email }));

        setFormIsSubmitted(true);
    }

    useEffect(() => {
        if(Object.keys(error).length === 0 && formIsSubmitted) {
            setTimeout(() => {
                axios.post(forgotPasswordApi, {email})
                    .then(({ data }) => {
                        if(data.status === "success") {
                            setResponseMessage({ ...responseMessage, type: '', message: '' });

                            // Set status
                            setStatus(true);
                        }
                        else 
                            setResponseMessage({ ...responseMessage, type: 'error', message: data.message });
                    })
            }, 1000);

        }
    }, [error, formIsSubmitted, email, responseMessage, setStatus]);

    if(!status) {
        content = (
            <>
                {/* SEO */}
                <SEO
                    title="Forgot password"
                    description="Reset password"
                    type="article"
                />

                {/* Request Error */}
                {responseMessage.message && 
                    <RequestMessageBox 
                        message={responseMessage?.message} 
                        type={responseMessage?.type}
                        style={{ "marginBottom": '2.3rem' }}/>}

                {/* Forgot password header */}
                <ForgotPasswordHeader>
                    <ForgotPasswordHeaderText>Reset password</ForgotPasswordHeaderText>
                    <ForgotPasswordSubHeader>Forgotten your password? Enter your email address below to begin reset process.</ForgotPasswordSubHeader>
                </ForgotPasswordHeader>

                {/* Forgot password container */}
                <FormContainer submitForm={forgotPassword}>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email address"
                        value={email}
                        handleChange={({ target }) => setEmail(target.value)}
                        error={error?.email}
                    />

                    <Button 
                        type="submit"
                        variant="primary"
                        style={{ width: '100%' }}
                    >
                        Submit
                    </Button>
                </FormContainer>
            </>
        );
    } else {
        content = (
            <>
                {/* Forgot password header */}
                <ForgotPasswordHeader>
                    <ForgotPasswordHeaderText>Reset password</ForgotPasswordHeaderText>
                </ForgotPasswordHeader>

                {/* Forgot Password Notice Container */}
                <ForgotPasswordNoticeContainer>
                    Check your inbox for the next steps. If you don't receive an email, and it's not in your spam folder this could mean you signed up with a different address.
                </ForgotPasswordNoticeContainer>
            </>
        );
    }

	return (
        <>
		  {content}

          {/* Auth Enquiry */}
          <AuthEnquiry 
                enquiry="Not a member yet" 
                enquiryPage="Create an account"
                route="/register"
          />
	   </>
    )
}

export default ForgotPasswordRequest;