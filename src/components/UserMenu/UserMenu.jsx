import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";
import { useDispatch } from "react-redux";
import { authOperations } from "auth/authOperations";
import { Container, UserName, Avatar, AvatarLetter, Button} from "./UserMenu.styled";

const UserMenu = () => {

    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();

    return ( userName &&
        <Container>
            <Avatar>
                <AvatarLetter>{userName.slice(0,1).toUpperCase()}</AvatarLetter>
            </Avatar>
            <UserName>{userName}</UserName>
            <Button type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
        </Container>
    )
};

export default UserMenu;