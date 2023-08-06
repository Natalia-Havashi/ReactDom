import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink) `
text-decoration: none;
color: #000;

&.active {
    color: red;
}
 
`