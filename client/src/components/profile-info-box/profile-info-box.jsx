import React from 'react';
import PropTypes from 'prop-types';
import { ProfileInfoBoxItem, ProfileInfoContainer, ProfileInfoBoxTitle, ProfileInfoContent } from './profile-info-box.styles';

function ProfileInfoBox({ icon, title="", content="" }) {
	return (
		<ProfileInfoBoxItem className="d-flex d-flex-column">
			{/* Profile Info Icon */}
			{icon}

			{/* Profile Info Container */}
			<ProfileInfoContainer className="d-flex d-flex-column">
				<ProfileInfoBoxTitle>{title}</ProfileInfoBoxTitle>
				<ProfileInfoContent>{content}</ProfileInfoContent>
			</ProfileInfoContainer>
		</ProfileInfoBoxItem>
	)
}

ProfileInfoBox.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default ProfileInfoBox;