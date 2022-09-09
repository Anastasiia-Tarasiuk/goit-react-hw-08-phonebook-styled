import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ScrollToTop from "react-scroll-to-top";

export const Shake = keyframes`
    0% { 
        transform: translateY(0); 
    }
    25% { 
        transform: translateY(5px);
    }
    50% { 
        transform: translateY(-5px);
    }
    75% { 
        transform: translateY(5px);
    }
    100% { 
        transform: translateY(0);
    }
`

export const Button = styled(ScrollToTop)`
    position: fixed; 
    bottom: 50px; 
    right: 30px; 
    z-index: 10; 
    background-color: transparent; 
    border: none;
    animation-name: ${Shake};
    animation-duration: 7s;
    animation-iteration-count: infinite; 
`