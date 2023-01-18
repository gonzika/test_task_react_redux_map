import styled from "styled-components";
import loginBackgroundUSrc from '../assets/login-background.jpg';

export const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: ${({ theme }) => theme.color.masala};
    background: url(${loginBackgroundUSrc});
    background-size: cover;
`;
