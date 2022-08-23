import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from "./Layout.styled";


const Layout = () => {
    return (
        <Container>   
            <AppBar />
            <Outlet />   
        </Container>
    )
};

export default Layout;