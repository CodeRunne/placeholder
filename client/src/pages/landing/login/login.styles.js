import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginFeature = styled.div`
    margin-top: -0.3rem;
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
        margin-top: 0;
        padding: 0 .5rem;
    }
`;

export const LoginFeatureRemember = styled.div`
    gap: .4rem;

    & .form-group {
        width: max-content;
    }
`;

export const LoginRememberText = styled.span`
    color: var(--grey-tint-7);
    font-size: .98rem;
    
    @media (max-width: 1024px) {
        font-size: 1.02rem;
    }

    @media (max-width: 768px) {
        font-size: 1.11rem;
    }

    @media (max-width: 425px) {
        font-size: 1.22rem;
        margin-top: -0.2rem;
    }

    @media (max-width: 375px) {
        font-size: 1.225rem;
    }
`;

export const ForgotPasswordText = styled(Link)`
    color: var(--primary);
    font-size: 1.04rem;
    text-align: right;
    text-decoration: none;

    @media (max-width: 1024px) {
        font-size: 1.06rem;
    }

    @media (max-width: 900px) {
        font-size: 1.02rem;
    }

    @media (max-width: 800px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        font-size: 1.13rem;
    }

    @media (max-width: 425px) {
        font-size: 1.16rem;
    }

    @media (max-width: 375px) {
        font-size: 1.2rem;
    }
`;