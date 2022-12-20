import React from 'react';
import {
    HeroContainer,
    HeroContent,
    HeroDescription,
    HeroTitle,
    HeroText
} from './hero.styles';


function Hero() {
    return (
        <HeroContainer className="hero gradient">
            {/* Hero Content */}
            <HeroContent>
                {/* Hero Content Description */}
                <HeroDescription>
                    <HeroTitle>Place Panel and Digital Marketing By Placeholder</HeroTitle>
                    <HeroText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. </HeroText>
                </HeroDescription>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;