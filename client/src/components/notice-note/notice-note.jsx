import React from 'react';
import { NoticeNoteContainer, NoticeNoteHeader, NoticeNoteTextContainer, NoticeNoteText, NoticeNoteLink } from './notice-note.styles';

function NoticeNote({ noticeText }) {
	return (
		<NoticeNoteContainer className="d-flex d-flex-column">
			<NoticeNoteHeader>Note:</NoticeNoteHeader>

			<NoticeNoteTextContainer className="d-flex d-flex-column">
				{noticeText.map(note => {
					if(typeof note === "object") {
						return (
							<NoticeNoteText 
								key={note?.note} 
								className="font-bold"
								>
									{note?.note}
									<NoticeNoteLink 
										to={`${note?.url}`}
									>
										{note?.linkName}
									</NoticeNoteLink>
								</NoticeNoteText>
						)	
					} else {
						return (
							<NoticeNoteText key={note} className="font-bold">{note}</NoticeNoteText>
						);
					}
				})}
			</NoticeNoteTextContainer>
		</NoticeNoteContainer>
	)
}

export default NoticeNote