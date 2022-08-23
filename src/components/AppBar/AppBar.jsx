import { Container } from "./AppBar.styled";
import { Navigation } from "components/Navigation/Navigation";
import { AuthMenu } from "components/AuthMenu/AuthMenu";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { authSelectors } from "auth/authSelectors";

export const AppBar = () => {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthMenu />}
      
      
    </Container>
  );
};