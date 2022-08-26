import styled from '@emotion/styled';

export const Container = styled.div`
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h2`
    color: blue;
`

export const SubTitle = styled.p`
    margin-bottom: 20px;
`

export const Form = styled.form`
    border: 1px solid grey;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 420px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    margin-left: 10px;
    width: 100%;
    height: 20px;
`

export const Button = styled.button`
    margin-top: 20px;

    :hover {        
        background-color: blue;
        color:white;
    }
`