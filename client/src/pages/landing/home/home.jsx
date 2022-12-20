import React from 'react';
import { Hero, Description, TelegramButton, ServicesBox, Packages, WhatWeOffer, EnquiryBox, InfoBox, Footer } from '../../../components';
import { InfoLinks } from '../../../constants/home';
import { APP_NAME } from '../../../config';
import { services } from '../../../constants/home';
import { ServicesContainer, ServicesSection, InfoContainer, InfoListItem, InfoLink, AboutContact } from './home.styles';

function Home() {
    return (
        <>
            {/* Hero */}
            <Hero />

            {/* Description */}
            <Description />

            {/* Telegram Button */}
            <TelegramButton />

            {/* Services Container */}
            <ServicesContainer className="container">
                {services.map(service => <ServicesBox key={service.title} {...service} />)}
            </ServicesContainer>

            {/* What we offer */}
            <WhatWeOffer />

            {/* Packages */}
            <Packages />

            {/* Info Section */}
            <ServicesSection className="container d-flex d-flex-column">
                <h4 className="heading-4">Cheap {APP_NAME} Panel</h4>
                <p className="paragraph">Most, <span className="font-bold">{APP_NAME} Panels</span> are only acting as an intermediary without beign able to provide the service and they have to charge you more. But here the intermediary is removed and you buy directly from the main provider. Our team's focus is always on reducing the price. In addition to applying discounts to good customers, we also try to keep the general price low. This is one of the most important features of our panel.</p>
            </ServicesSection>

            {/* Enquiry Box */}
            <EnquiryBox />

            <InfoContainer className="container d-grid">
                {/* Links */}
                <InfoBox heading="Follow smmstone in social media">
                    <InfoListItem className="d-grid">
                        {InfoLinks.map(({ name, url }) => (
                            <li key={name}>
                                <InfoLink className="gradient-text" to={`${url}`}>{name}</InfoLink>
                            </li>
                        ))}
                    </InfoListItem>
                </InfoBox>

                {/* Links */}
                <InfoBox heading={`About ${APP_NAME}`}>
                    <p className="paragraph"><span className="font-bold">{APP_NAME}</span> is not a only panel. An advanced and unique community. We are here to make you special on social media and to make you better than others</p>

                    <AboutContact>
                        <span className="gradient-text">Contact:</span>  <span className="paragraph">admin@smmstone.com</span></AboutContact>
                </InfoBox>
            </InfoContainer>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Home;