import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData'
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: black;
  opacity: 0.75;

  &:hover {
    opacity: 0.90;
    transition: 0.14s ease-in-out;
  }
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
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

//If screen isn't wide enough this isn't displayed
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//Pass in NavLink style
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

//If screen isn't wide enough this isn't displayed
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to='/'>UPST8 EMPIRE</Logo>
      <MenuBars onClick={toggle} />
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

export default Navbar;