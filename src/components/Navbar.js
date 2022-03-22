import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData'
import { Button } from './Button';

const Nav = styled.nav`
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: red;
`;

//Styles to be passed into other variables
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

//Pass in NavLink style
const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
  font-style: italic;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
`;

//Pass in NavLink style
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>UPST8 EMPIRE</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) =>(
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary='true'>Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar