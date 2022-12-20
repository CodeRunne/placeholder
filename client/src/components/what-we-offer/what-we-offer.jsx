import React from 'react';
import ZPattern from '../z-pattern/z-pattern';
import { whatWeOffer } from '../../constants/home';
 

function WhatWeOffer() {
	const { image, name } = whatWeOffer;

	return (
		<>
			<ZPattern 
				imgSource={image} 
				heading={name} 
			/>
		</>
	)
}

export default WhatWeOffer