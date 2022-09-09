import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;

    
`
export const UserName = styled.p`
    margin-right: 20px;
    margin-left: 5px;
`
export const Avatar = styled.div`
    border-radius: 50%;
    background-color: blue;
    width: 40px;
    height: 40px;
    position: relative;
`
export const AvatarLetter = styled.p`
    font-size: 24px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const Button = styled.button`

    :hover {        
        background-color: blue;
        color:white;
    }
`