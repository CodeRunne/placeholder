import styled, { keyframes } from 'styled-components';

export const SpinnerContainer = styled.div`
	width: 100%;
  height: 100%;
	position: relative;
`;

const LBSRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const SpinnerItem = styled.div`
	 box-sizing: border-box;
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  border: 3px solid var(--grey-tint-7);
  border-radius: 50%;
  animation: ${LBSRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--grey-tint-7) transparent transparent transparent;

  &:nth-child(1) {
  	animation-delay: -0.45s;
  }

  &:nth-child(2) {
  	 animation-delay: -0.3s;
  }

  &:nth-child(3) {
  	animation-delay: -0.15s;
  }
`;
