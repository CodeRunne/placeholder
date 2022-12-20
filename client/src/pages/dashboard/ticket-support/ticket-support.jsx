import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import TicketSupportValidation from '../../../validation/ticket-support.validation';
import { ticketSupportNote } from '../../../constants/dashboard';
import { Alert, NoticeBox, NoticeNote, Modal, FormInput, Button } from '../../../components';
import { TicketSupportForm } from './ticket-support.styles';

function TicketSupport() {
	const { currentUser: { id }} = useContext(AuthContext);
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState({});
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [alertIsOpen, setAlertIsOpen] = useState(false);

	useEffect(() => {
		// Display Modal onLoad
		setIsModalOpen(true);

		// Display Alert
		setAlertIsOpen(true)

		return () => {
			setIsModalOpen(false);
			setAlertIsOpen(false);
		}
	}, [setIsModalOpen, setAlertIsOpen]);


	function submitTicket(e) {
		e.preventDefault();

		setErrors(TicketSupportValidation({ subject, message }));

		setFormIsSubmitted(true);
	}

	useEffect(() => {
		if(Object.keys(errors).length === 0 && formIsSubmitted) {
			console.log(subject, message, id)
		}
	}, [errors, formIsSubmitted, subject, message, id])


	return (
		<div>
			{/* Alert */}
			{ alertIsOpen ? 
				<Alert  
					isOpen={alertIsOpen} 
					setIsOpen={setAlertIsOpen}
				>
					Any misbehaviour with our customer support will cause your account to be limited and/or potentially suspended <span className="font-bold">Notice to all users: </span> 
			</Alert> : null }

			{/* Modal */}
			<Modal
				isOpen={isModalOpen}
				closeModal={() => setIsModalOpen(prevState => !prevState)}
			>
				<NoticeBox>
					{/* List */}
					<ul>
						<li>For Problems with Orders, use subject <span className="font-bold gradient-text">Order</span>
						</li>
						<li>For Problems with Payments, use subject <span className="font-bold gradient-text">Payment</span>
						</li>
						<li>If you need any Payment method/Service/Feature, use subject <span className="font-bold gradient-text">Request</span>
						</li>
						<li>If any bug in the website, use subject <span className="font-bold gradient-text">Bug Report</span>
						</li>
						<li>For any thing else, use subject <span className="font-bold gradient-text">Other</span>
						</li>
					</ul>

					{/* Notice Note Container */}
					<NoticeNote noticeText={ticketSupportNote} />
				</NoticeBox>		
			</Modal>
			
			{/* Ticket support form */}
			<TicketSupportForm 
				className="d-flex d-flex-column"
				style={{ marginTop: alertIsOpen ? '4rem' : '0' }}
				onSubmit={submitTicket}
				noValidate
			>
				<h5 className="heading-5" style={{ fontWeight: '400' }}>Ticket Support</h5>

				<FormInput 
					type="text"
					name="subject"
					label="subject"
					value={subject}
					handleChange={({ target }) => setSubject(target.value)}
					error={errors?.subject}
				/>

				<FormInput 
					type="textarea"
					name="message"
					label="Message"
					value={message}
					handleChange={({ target }) => setMessage(target.value)}
					error={errors?.message}
				/>

				<Button 
					style={{ width: '100%' }}
					type="submit" 
					variant="primary"
				>
					Submit ticket
				</Button>
			</TicketSupportForm>	
		</div>
	)
}

export default TicketSupport