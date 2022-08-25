import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

export const PublicRoute = ({ children }) => {

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}