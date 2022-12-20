import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';
import Button from '../button/button';
import { NoMatchContainer, NoMatchHighlighter, NoMatchSubHeader } from './no-match.styles';

function NoMatch({ path, style={} }) {
	const navigate = useNavigate();

	return (
		<NoMatchContainer className="d-flex d-flex-column" style={style}>
			<NoMatchHighlighter className="gradient-text">404</NoMatchHighlighter>
			<h1 className="heading-1">Page not found</h1>
			<NoMatchSubHeader>Sorry, we couldn't find the page you are looking for</NoMatchSubHeader>
			<Button 
				style={{ color: 'var(--primary)' }}
				onClick={() => navigate(`${path}`)}
			>
				Go back home
				<IoArrowForward />
			</Button>
		</NoMatchContainer>
	)
}

NoMatch.propTypes = {
	path: PropTypes.string.isRequired,
	style: PropTypes.object.isRequired
}

export default NoMatch