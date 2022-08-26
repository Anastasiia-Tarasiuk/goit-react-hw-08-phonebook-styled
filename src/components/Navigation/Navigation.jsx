import { StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

export const Navigation = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
      <div>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Phonebook</StyledLink>}
      </div>
    )
}