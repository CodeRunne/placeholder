import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/auth-provider/auth-provider';
import { telegram_payment_support_link } from '../../../config';
import AddFundsValidation from '../../../validation/add-funds.validation';
import { addFundsNote, addFundsBonuses, addFundsPaymentOptions, addFundsPaymentLinks } from '../../../constants/dashboard';
import { NoticeBox, NoticeNote, Modal, FormLabel, FormSelect, FormInput, Button } from '../../../components';
import { 
	AddFundsContainer, 
	AddFundsForm, 
	AddFundsInstructionBox, 
	AddFundsInstructionBonusContainer,
	AddFundsInstructionBonusText,
	AddFundsInstructionLink
} from './add-funds.styles';

function AddFunds() {
	const { currentUser: { id }} = useContext(AuthContext);
	const [paymentMethod, setPaymentMethod] = useState("");
	const [amount, setAmount] = useState("");
	const [errors, setErrors] = useState({});
	const [formIsSubmitted, setFormIsSubmitted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		// Display Modal onLoad
		setIsModalOpen(true);

		return () => {
			setIsModalOpen(false);
		}
	}, [setIsModalOpen]);

	// Submit funds
	function addFunds(e) {
		e.preventDefault();

		setErrors(AddFundsValidation({ paymentMethod, amount }));		

		setFormIsSubmitted(true);
	}

	useEffect(() => {
		if(Object.keys(errors).length === 0 && formIsSubmitted) {
			const paymentLink = addFundsPaymentLinks[paymentMethod];
		
			console.log(paymentLink, id);
		}
	}, [errors, formIsSubmitted, paymentMethod, id]);



	return (
		<div>
			{/* Modal */}
			<Modal
				isOpen={isModalOpen}
				closeModal={() => setIsModalOpen(prevState => !prevState)}
			>
				<NoticeBox>
					{/* List */}
					<ul>
						<li>Pay the exact amount you see on the payment page, <span className="font-bold gradient-text">nothing more and nothing less.</span>
						</li>
						<li>If you pay less with more, it will be done automatically <span className="font-bold gradient-text">Payment.</span>
						</li>
						<li>Manual <span className="font-bold gradient-text">Crypto</span> Payment <span className="font-bold gradient-text">3% Bonus.</span>
						</li>
						<li>
							<span className="font-bold gradient-text">Best payment method for Indian users.</span> You can pay crypto and get <span className="font-bold gradient-text">3.5% bonus.</span>
						</li>
					</ul>

					{/* Notice Note Container */}
					<NoticeNote noticeText={addFundsNote} />
				</NoticeBox>		
			</Modal>

			{/* Add funds form container */}
			<AddFundsContainer>
				<h5 className="heading-5" style={{ fontWeight: '500' }}>Add Funds</h5>

				{/* Add funds form */}
				<AddFundsForm 
					className="d-flex d-flex-column"
					onSubmit={addFunds}
					noValidate
				>
					{/* Form Select */}
					<FormSelect 
						label="payment method"
						name="payment_method"
						options={addFundsPaymentOptions}
						value={paymentMethod}
						handleChange={({ target }) => setPaymentMethod(target.value)}
						error={errors?.paymentMethod}
					/>

					<FormInput 
						type="number"
						name="amount"
						label="amount"
						value={amount}
						handleChange={({ target }) => setAmount(target.value)}
						error={errors?.amount}
					/>

					{/* Add funds instruction box */}
					<AddFundsInstructionBox className="d-flex d-flex-column">
						{/* Add funds instruction label */}
						<FormLabel content="Instructions" />

						{/* Add Funds Instruction Bonus Container */}
						<AddFundsInstructionBonusContainer className="d-flex d-flex-column">
							{addFundsBonuses.map(bonus => (
								<AddFundsInstructionBonusText key={bonus}>{bonus}</AddFundsInstructionBonusText>
							))}
						</AddFundsInstructionBonusContainer>


						{/* Add funds instruction link */}
						<AddFundsInstructionLink>
							Do you need support: <Link 
								to={`${telegram_payment_support_link}`}
								className="gradient-text"
							>Telegram payment support</Link> 
						</AddFundsInstructionLink>
					</AddFundsInstructionBox>

					<Button
						type="submit"
						variant="primary"
						style={{ width: '100%' }}
					>
						Make payment
					</Button>
				</AddFundsForm>
			</AddFundsContainer>
		</div>
	)
}

export default AddFunds