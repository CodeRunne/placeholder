import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import ResetValidation from '../../../validation/reset-password.validation';
import { 
    FormInput,
    FormContainer,
    Button,
    AuthEnquiry,
    RequestErrorBox
} from '../../../components';
import { ForgotPasswordHeader, ForgotPasswordHeaderText } from '../forgot-password/forgot-password.styles';

function ResetPassword() {
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [errors, setErrors] = useState({});

	function resetPassword(e) {
		e.preventDefault();

		setErrors(ResetValidation({
			password: newPassword,
			confirmPassword: confirmNewPassword
		}));

		setFormIsSubmitted(true);

		console.log(errors);
	}

	useEffect(() => {
        if(Object.keys(errors).length === 0 && formIsSubmitted) {
        	console.log(newPassword, confirmNewPassword)
            // setTimeout(() => {
                
            // }, 1000);
        }
    }, [errors, formIsSubmitted, newPassword, confirmNewPassword]);

	return (
		<>
			<ForgotPasswordHeader>
				<ForgotPasswordHeaderText>Reset password</ForgotPasswordHeaderText>
			</ForgotPasswordHeader>

			{/* Forgot password container */}
            <FormContainer submitForm={resetPassword}>
                <FormInput
                    type="password"
                    name="new_password"
                    label="New password"
                    value={newPassword}
                    handleChange={({ target }) => setNewPassword(target.value)}
                    error={errors?.password}
                />

                <FormInput
                    type="password"
                    name="confirm_password"
                    label="Confirm password"
                    value={confirmNewPassword}
                    handleChange={({ target }) => setConfirmNewPassword(target.value)}
                    error={errors?.confirmPassword}
                />

                <Button 
                	type="submit"
                    variant="primary"
                    style={{ width: '100%' }}
                >
                    Submit
                </Button>

                <AuthEnquiry 
                    enquiry="Not a member yet" 
                    enquiryPage="Create an account"
                    route="/register"
                />
            </FormContainer>
		</>
	)
}

export default ResetPassword