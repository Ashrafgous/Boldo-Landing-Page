import React from "react";
import styled from "styled-components";
import BoldoLogo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <Nav>
      <Lists>
        <Logo>
          <img src={BoldoLogo} alt="Logo" />
        </Logo>
        <NavLink>
          <Links>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </Links>
          <Login>
            <a href="/">Login</a>
          </Login>
        </NavLink>
      </Lists>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #0a2640;
`;
const Lists = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 835px){
    display: flex;
    justify-content: center;
  }
`;
const Logo = styled.div`
  margin-left: 6rem;
  
`;
const NavLink = styled.div`
  margin-right: 5rem;
  display: flex;
  flex-direction: row;
`;
const Links = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 2rem;
  gap: 40px;
  li {
    list-style: none;
    margin: 0.5rem;

    a {
      font-family: "Open Sans", sans-serif;
      padding: 1rem;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      color: white;
      text-decoration: none;
    }
  }
  @media (max-width: 1330px){
    display: none;
  }
`;
const Login = styled.div`
  margin: 0 2rem;
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 24px;
  width: 128px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 40px;
  gap: 8px;

  a {
    text-decoration: none;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    /* identical to box height, or 150% */

    display: flex;
    justify-content: center;
    align-items: center;

    /* Dark Blue */

    color: #0a2640;
  }

  @media (max-width: 835px){
    display: none;
  }
`;

export default Navbar;
