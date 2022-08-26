import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    width: 440px;
    align-items: center;
    font-size: 20px;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`

export const Button = styled.button`
    margin-left: 10px;
    height: 20px;
    align-self: center;

    :hover {        
        background-color: blue;
        color:white;
    }
`

export const Name = styled.span`
    width: 250px;
`

export const Number = styled.span`
    margin-left: auto;
`