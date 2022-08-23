import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

const UserMenu = () => {
    const userName = useSelector(authSelectors.getUserName);

    return (
        <>
            
            <p>{userName}</p>
            <button type="button">Log out</button>
        </>
    )
};

export default UserMenu;