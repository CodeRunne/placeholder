import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { updateEmailAPI } from '../../../config';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import EmailValidation from '../../../validation/email.validation';
import { FormInput, Button, Notification } from '../../../components';
import { AccountFormsContainer, AccountForm, AccountFormHeader } from './account.styles';

function Account() {
	const { currentUser } = useContext(AuthContext);
	// Current User Details
	const { id, email, username } = currentUser;

	const [currentEmail, setCurrentEmail] = useState(email);
	const [currentEmailError, setCurrentEmailError] = useState({});
	const [updatedUsername, setUpdatedUsername] = useState(username);
	const [updatedUsernameError, setUpdatedUsernameError] = useState("");
	const [currentPassword, setCurrentPassword] = useState("");
	const [currentPasswordError, setCurrentPasswordError] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [newPasswordError, setNewPasswordError] = useState("");
	const [confirmNewpassword, setConfirmNewPassword] = useState("");
	const [confirmNewpasswordError, setConfirmNewPasswordError] = useState("");
	const [apiKey, setApiKey] = useState("");
	const [apiKeyError, setApiKeyError] = useState("");
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [message, setMessage] = useState({
		message: "",
		type: ""
	});

	// Update Email
	function updateNewEmail(e) {
		e.preventDefault();

		setCurrentEmailError(EmailValidation({email: currentEmail}));

		setFormIsSubmitted(true);
	}

	// Update password form submit
	function updateUsername(e) {
		e.preventDefault();

		if(!updatedUsername.length)
			setUpdatedUsernameError("Username can't be empty");

		console.log(updatedUsername);
	}

	// Update password form submit
	function updatePassword(e) {
		e.preventDefault();

		if(!currentPassword.length)
			setCurrentPasswordError("Please fill in your current password");

		// New Password validation
		if(!newPassword.length) 
			setNewPasswordError("Please fill in your new password");
		else if(newPassword === currentPassword) 
			setNewPasswordError("Can't use your current password");

		// Confirm password validation
		if(!confirmNewpassword.length) 
			setConfirmNewPasswordError("Please confirm your new password");
		else if(confirmNewpassword !== newPassword) 
			setConfirmNewPasswordError("Password doesn't match");
		else if(confirmNewpassword === currentPassword) 
			setConfirmNewPasswordError("Can't use your current password");
	}

	// Generate API KEY form
	function generateAPIKEY(e) {
		e.preventDefault();

		if(!apiKey.length) 
			setApiKeyError("Please add a valid api key");
		else if(apiKey.length < 10)
			setApiKeyError("Api Key can't be less than 10")
		else {
			try {
				console.log("api")
				setApiKeyError("");
			} catch(e) {
				console.log(e);
			}
		}
	}

	useEffect(() => {
		if(Object.keys(currentEmailError).length === 0 && formIsSubmitted) {
			axios.post(updateEmailAPI, {userID: id, updatedEmail: currentEmail})
				.then(({ data: { status, message } }) => {
					if(status === "success")
						setMessage({ ...message, message, type: "success" });
					else 
						setMessage({ ...message, message, type: "failed" });
				});
		}
	}, [currentEmailError, formIsSubmitted, id, currentEmail, setMessage]);

	return (
		<>	
			{message.message &&
				<Notification 
					type={message.type}
					message={message.message} 
					closeModal={() => setMessage({ ...message, message: "", type: "" })}
				/>}


			{/* Account Forms Container */}
			<AccountFormsContainer className="d-grid">
				<h5 className="heading-5" style={{ 
					fontWeight: '500', 
					textAlign: 'center'
				}}>Accounts</h5>

				{/* Email Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updateNewEmail}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Email</AccountFormHeader>

					<FormInput 
						type="email"
						name="email"
						label="email"
						value={currentEmail}
						handleChange={({ target }) => setCurrentEmail(target.value)}
						error={currentEmailError?.email}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change Email
					</Button>
				</AccountForm>

				{/* Username Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updateUsername}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Username</AccountFormHeader>

					<FormInput 
						type="username"
						name="username"
						label="username"
						value={updatedUsername}
						handleChange={({ target }) => setUpdatedUsername(target.value)}
						error={updatedUsernameError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change Username
					</Button>
				</AccountForm>

				{/* Password Update Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={updatePassword}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Update Password</AccountFormHeader>

					<FormInput 
						type="password"
						name="current-password"
						label="Current password"
						value={currentPassword}
						handleChange={({ target }) => setCurrentPassword(target.value)}
						error={currentPasswordError}
					/>

					<FormInput 
						type="password"
						name="new-password"
						label="New password"
						value={newPassword}
						handleChange={({ target }) => setNewPassword(target.value)}
						error={newPasswordError}
					/>

					<FormInput 
						type="password"
						name="confirm-new-password"
						label="confirm new password"
						value={confirmNewpassword}
						handleChange={({ target }) => setConfirmNewPassword(target.value)}
						error={confirmNewpasswordError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Change password
					</Button>
				</AccountForm>

				{/* Account Form */}
				<AccountForm 
					className="d-flex d-flex-column" 
					onSubmit={generateAPIKEY}
					noValidate
				>
					{/* Account Form Header */}
					<AccountFormHeader>Generate Api Key</AccountFormHeader>

					<FormInput 
						type="text"
						name="api-key"
						label="Api key"
						placeholder="**************************************************************"
						value={apiKey}
						handleChange={({ target }) => setApiKey(target.value)}
						error={apiKeyError}
					/>

					<Button 
						type="submit"
						variant="primary"
					>
						Generate Api key
					</Button>
				</AccountForm>
			</AccountFormsContainer>
		</>
	)
}

export default Account;