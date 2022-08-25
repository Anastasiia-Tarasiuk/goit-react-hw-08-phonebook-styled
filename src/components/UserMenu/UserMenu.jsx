import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Container, UserName, Avatar, AvatarLetter } from "./UserMenu.styled";

const UserMenu = () => {

    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    return (
        <Container>
            <Avatar>
                <AvatarLetter>{userName.slice(0,1).toUpperCase()}</AvatarLetter>
            </Avatar>
            <UserName>{userName}</UserName>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</button>
        </Container>
    )
};

export default UserMenu;