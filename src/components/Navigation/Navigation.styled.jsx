import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    &:not(:last-child) {
        margin-right: 20px;
    }
    &.active {
    color: orange;
    }
`