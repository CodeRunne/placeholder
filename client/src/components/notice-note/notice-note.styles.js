import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoticeNoteContainer = styled.div`
	margin-top: 2.5rem;
	gap: .7rem;

	@media (max-width: 900px) {
		gap: .9rem;
	}
`;

export const NoticeNoteHeader = styled.h6`
	font-size: 1.2rem;
	color: var(--accent);

	@media (max-width: 900px) {
		font-size: 1.3rem;
	}

	@media (max-width: 425px) {
		font-size: 1.4rem;
	}
`;

export const NoticeNoteTextContainer = styled.div`
	gap: .7rem;
	padding-left: .4rem;

	@media (max-width: 900px) {
		gap: .85rem;
	}

	@media (max-width: 425px) {
		gap: 1.12rem;
	}
`;

export const NoticeNoteText = styled.p`
	font-size: 1.02rem;
	line-height: 1.5;

	@media (max-width: 900px) {
		font-size: 1.06rem;
		line-height: 1.7;
	}

	@media (max-width: 425px) {
		font-size: 1.15rem;
		line-height: 1.6;
	}
`;

export const NoticeNoteLink = styled(Link)`
	width: max-content;
	font-size: 1.05rem;
	font-weight: 600;
	margin-left: .5rem;

	@media (max-width: 900px) {
		font-size: 1.1rem;
	}

	@media (max-width: 425px) {
		font-size: 1.17rem;
	}
`;

