import { StyledLink } from "./Navigation.styled";

export const Navigation = () => {
    return (
              <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Sign in</StyledLink>
        <StyledLink to="/contacts">Phonebook</StyledLink>
      </nav>
    )
}