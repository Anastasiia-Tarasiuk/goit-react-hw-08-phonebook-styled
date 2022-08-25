import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

export const PrivateRoute = ({ children, ...routeProps }) => {
    
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return ( 
        <Route {...routeProps}>
            {isLoggedIn ? children : <Navigate to='/login' />}
        </Route>
        
    )

};


