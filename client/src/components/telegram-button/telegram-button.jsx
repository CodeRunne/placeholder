import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import { telegram_redirect_bot_link } from '../../config';
import { TelegramButtonBox, TelegramButtonLink } from './telegram-button.styles';


function TelegramButton() {
	return (
		<TelegramButtonBox>
			<TelegramButtonLink href={`${telegram_redirect_bot_link}`} target="_blank" className="d-flex d-j-cnt d-a-cnt">
				<FaTelegram />
			</TelegramButtonLink>
		</TelegramButtonBox>
	)
}

export default TelegramButton;