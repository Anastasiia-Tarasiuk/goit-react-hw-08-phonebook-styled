import UpButtonImg from '../../images/mobile-icon.png';
import { UpText } from './ScrollUpButton.styled';

export const ScrollUpButton = () => {
    return (
        <>
            <img src={UpButtonImg} alt="UpButton" width="35"/>
            <UpText>UP</UpText>
        </>
    )
}