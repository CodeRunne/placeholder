import React from 'react';
import { APP_NAME } from '../../config';
import { DescriptionContainer, DescriptionHeader, DescriptionText } from './description.styles';

function Description() {
    return (
        <DescriptionContainer className="d-flex d-flex-column d-a-cnt">
            <DescriptionHeader className="heading-2">What Is {APP_NAME} Panel?</DescriptionHeader>
            <DescriptionText className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia porro vel beatae atque omnis. Accusamus ut, totam, alias rerum pariatur consectetur. Quo impedit beatae explicabo eveniet excepturi, qui temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quia porro vel beatae atque omnis. Accusamus ut, totam, alias rerum pariatur consectetur. Quo impedit beatae explicabo eveniet excepturi, qui temporibus.
            </DescriptionText>

            <DescriptionText className="paragraph">Lorem ipsum, dolor sit amet consectetur</DescriptionText>
        </DescriptionContainer>
    )
}

export default Description;