import styled from 'styled-components';

export const EmptyPageContainer = styled.div`
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 12rem;
        border-radius: 0.15rem;
        padding: 0.8rem;
    }
`;

export const EmptyPageImage = styled.img`
    width: 25%;
`;

export const EmptyPageHeader = styled.h4`
    font-size: 1.7rem;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;
`;

export const EmptyPageInfo = styled.p`
    font-size: 1.04rem;
    color: var(--grey-tint-7);
    margin-bottom: 1.6rem;
`;