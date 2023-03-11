import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderStyled = styled.header`
  display: flex;
  gap: 20px;
  background-color: #254E58;
  align-items: center;
  font-size: 28px;
  padding: 30px;
  nav {
    display: flex;
    gap: 20px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color:#1C3334;
  text-decoration: none;
  &.active {
    color: #88BDBC;
  }
`;

export { HeaderStyled, NavLinkStyled };