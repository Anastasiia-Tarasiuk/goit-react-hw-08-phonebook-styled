import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

export const PrivateRoute = ({ children }) => {
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return isLoggedIn ? children : <Navigate to='/login' replace />;
};
