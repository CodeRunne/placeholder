import React from 'react';
import { ZPatternContainer, ZPatternImage, ZPatternContent } from './z-pattern.styles';
import { APP_NAME } from '../../config';

function ZPattern({ imgSource, heading }) {
	return (
		<ZPatternContainer className="container d-grid">
			<ZPatternImage src={imgSource} alt="background" />

			<ZPatternContent className="d-flex d-flex-column">
				<h4 className="heading-4">{heading}</h4>
				<p className="paragraph">A professional <span className="font-bold">Panel</span> should meet all the needs of it's user. On the other hand, it has to provide all the surveys and also it has to adjust the prices so that users can sell it to their customers at a significant profit. We try to have the most complete panel here.</p>
				<p className="paragraph">You can see all the factors in <span className="gradient-text">{APP_NAME}</span>. We have the highest number of services, the lowest market price and the best support team to solve your problems at any time</p>
			</ZPatternContent>	
		</ZPatternContainer>
	)
}

export default ZPattern