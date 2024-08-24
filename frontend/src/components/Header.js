import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Navbar>
      <h1 style={{ color: "#fff" }}>store</h1>
      <NavLinks>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/shoppage">PRODUCT</NavLink>
      </NavLinks>
    </Navbar>
  );
}

export default Header;
