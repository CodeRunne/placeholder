import React from 'react';
import { Hero, EnquiryBox, Footer } from '../../../components';
import {
    HowToUseHeader,
    HowToUseText,
    HowToUseList
} from '../../../constants/how-to-use';
import {
    HowToUseContainer,
    HowToUseHeaderHeaderText,
    HowToUseHeaderParagraph,
    HowToUseHeaderListItems
} from './how-to-use.styles';

function HowToUse() {
    return (
        <>
            {/* Hero */}
            <Hero />

            {/* How to use container */}
            <HowToUseContainer>
                <HowToUseHeaderHeaderText>{HowToUseHeader}</HowToUseHeaderHeaderText>
                <HowToUseHeaderParagraph>{HowToUseText.body}</HowToUseHeaderParagraph>

                {/* Guides on how to use */}
                <HowToUseHeaderListItems className="d-flex d-flex-column">
                    {HowToUseList.map(list => <li key={list}>{list}</li>)}
                </HowToUseHeaderListItems>


                <HowToUseHeaderParagraph>{HowToUseText.footer}</HowToUseHeaderParagraph>
            </HowToUseContainer>

            {/* Enquiry Box */}
            <EnquiryBox />

            {/* Footer */}
            <Footer />
        </>        
    )
}

export default HowToUse;