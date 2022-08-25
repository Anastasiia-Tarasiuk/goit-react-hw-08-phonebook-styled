import { StyledLink} from "./AuthMenu.styled";

export const AuthMenu = () => {
return (
  <div>
    <StyledLink to="/register">Register</StyledLink>
    <StyledLink to="/login">Sign in</StyledLink>
  </div>
)
}