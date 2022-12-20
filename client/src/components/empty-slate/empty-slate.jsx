import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import SlateImage from '../../assets/images/img (1).jfif';
import { EmptyPageContainer, EmptyPageImage, EmptyPageHeader, EmptyPageInfo } from './empty-slate.styles';

function EmptySlate() {
	const navigate = useNavigate();

	return (
		<EmptyPageContainer>
			<EmptyPageImage src={SlateImage} alt="empty-slate" />
			<EmptyPageHeader>No Orders yet</EmptyPageHeader>
			<EmptyPageInfo>Click the button below to book order</EmptyPageInfo>
			<Button 
				variant="primary"
				onClick={() => navigate('/dashboard/book-order')}
			>Book order</Button>
		</EmptyPageContainer>
	)
}

export default EmptySlate;