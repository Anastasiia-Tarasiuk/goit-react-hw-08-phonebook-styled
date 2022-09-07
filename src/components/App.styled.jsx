import styled from '@emotion/styled';
import background from '../images/phonebook_background.jpg';

export const Container = styled.div`
    background-image: url(${background}); 
    background-size: cover; 
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // font-size: 30px;
    color: #010101;
`