import React from 'react';
import { NoticeBoxContainer, NoticeBoxHeader } from './notice-box.styles';

function NoticeBox({ children }) {
	return (
		<NoticeBoxContainer>
			<NoticeBoxHeader className="heading-6">Important Notice <span>!!!</span></NoticeBoxHeader>

			<div>
				{children}
			</div>
		</NoticeBoxContainer>
	)
}

export default NoticeBox;