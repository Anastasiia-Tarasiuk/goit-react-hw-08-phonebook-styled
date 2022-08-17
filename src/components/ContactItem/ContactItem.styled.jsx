import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    width: 400px;
    justify-content: space-between;
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