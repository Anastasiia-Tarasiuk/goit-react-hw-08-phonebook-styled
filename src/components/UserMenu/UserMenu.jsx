import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Container, UserName, Avatar, AvatarLetter } from "./UserMenu.styled";
import Button from 'react-bootstrap/Button';

const UserMenu = () => {

    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    return ( userName &&
        <Container>
            <Avatar>
                <AvatarLetter>{userName.slice(0,1).toUpperCase()}</AvatarLetter>
            </Avatar>
            <UserName>{userName}</UserName>
            <Button variant="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
        </Container>
    )
};

export default UserMenu;