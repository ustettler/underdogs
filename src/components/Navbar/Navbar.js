
import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../Navbar/img/Logo Weiss.jpg";

export const Navbar = () => {
  // Hamburger
  const [isOpen, setIsOpen] = useState(false);

  const MenuLink = styled.a`
    padding: 1rem;
    margin:4px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 143.2%;
    color: #FFFFFF;
    transition: all 0.3s ease-in;
    &:hover {
      color :#525291;
    }
    @media (max-width: 1199px) {
      padding: 0rem 0.5rem;
      margin:8px;
      font-size: 14px;
    }
  @media (max-width: 768px) {
      text-decoration: none;
      font-size: 0.9rem;
      display: flex;
      padding: 0 1rem;
      margin: 4px;
    }
  `;

  const Nav = styled.div`
    // padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #1C1C65;
    
  @media (max-width: 768px) {
      background: #1C1C65;
      padding: 1rem;
  }
`;

  const Logo = styled.a`
  @media (max-width: 768px) {
    display: none;
  }
`;

  const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
      transition: max-height 0.3s ease-in;
      width: 100%;
  }
`;

  const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
      height: 2px;
      width: 25px;
      background: #87889d;
      margin-bottom: 4px;
      border-radius: 5px;
    }
  @media (max-width: 768px) {
      display: flex;
      position: relative;
      right: 46%;
    }
`;

  return (

    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="">Home</MenuLink>
        <MenuLink href="">Gallerie</MenuLink>
        <MenuLink href="">Ort</MenuLink>
        <MenuLink href="">News</MenuLink>
        <Logo href="">
          <img src={LogoImage} alt="Logo"
            style={{
              width: "100px",
              position: "relative",
              right: "0",
              bottom: "0"
            }}
          />
        </Logo>
        <MenuLink href="">Über uns</MenuLink>
        <MenuLink href="">Newsletter</MenuLink>
        <MenuLink href="">Kontakt</MenuLink>
        <MenuLink href="">Bestenliste</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;



