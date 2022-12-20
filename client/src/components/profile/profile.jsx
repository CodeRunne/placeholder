import React, { useContext } from 'react';
import { IoPerson, IoReorderTwo, IoJournal, IoLogoBitcoin } from 'react-icons/io5';
import { AuthContext } from '../../providers/auth-provider/auth-provider';
import ProfileInfoBox from '../profile-info-box/profile-info-box';
import { ProfileContainer } from './profile.styles';

function Profile({ style }) {
	const { currentUser } = useContext(AuthContext);
	const username = currentUser?.username;
	const orderAmount = currentUser?.orders_amount || 0;
	const funds = currentUser?.funds || {accountBalance: 0, balanceSpent: 0};
	const { accountBalance, balanceSpent } = funds;


	return (
		<ProfileContainer 
			className="d-grid"
			style={style}
		>
			<ProfileInfoBox 
				icon={<IoPerson />}
				title={username}
				content="welcome to our panel"
			/>

			<ProfileInfoBox 
				icon={<IoLogoBitcoin />}
				title={balanceSpent === 0 ? "$0.00" : `$${balanceSpent}`}
				content="Balance spent"
			/>

			<ProfileInfoBox 
				icon={<IoReorderTwo />}
				title={orderAmount >= 10 ? orderAmount : `${orderAmount}.00`}
				content="panel orders"
			/>

			<ProfileInfoBox 
				icon={<IoJournal />}
				title="Account balance"
				content={`$${accountBalance}`}
			/>
		</ProfileContainer>
	)
}

export default Profile;