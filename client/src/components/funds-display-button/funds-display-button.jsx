import React, { useContext } from 'react';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import { IoLogoBitcoin } from 'react-icons/io5';
import Button from '../button/button';
import { FundsDisplayButtonWrapper } from './funds-display-button.styles';

function FundsDisplayButton() {
	const { currentUser } = useContext(AuthContext);
	const { funds } = currentUser;
	const accountBalance = funds?.accountBalance || 0;

	return (
		<FundsDisplayButtonWrapper>
			<Button>
				{accountBalance}
				<IoLogoBitcoin />
			</Button>
		</FundsDisplayButtonWrapper>
	)
}

export default FundsDisplayButton;