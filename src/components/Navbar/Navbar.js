
import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../Navbar/img/image.png";

export const Navbar = () => {
  // Hamburger
  const [isOpen, setIsOpen] = useState(false);

  const MenuLink = styled.a`
    padding: 1rem 2rem;
    margin:8px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 143.2%;
    color: #FFFFFF;
    transition: all 0.3s ease-in;
    &:hover {
      color :#b7118a;
    }

  @media (max-width: 768px) {
      font-size: 0.9rem;
      display: flex;
      padding: 0 1rem;
      margin: 10px;
    }
  `;

  const Nav = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
  @media (max-width: 768px) {
      background: #1C1C65;
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
      background: #7b7fda;
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
        <MenuLink href="">Bestenliste</MenuLink>
        <MenuLink href="">Gallery</MenuLink>
        <MenuLink href="">Location</MenuLink>
        <Logo href="">
          <img src={LogoImage} alt="Logo"
            style={{
              width: "146px",
              position: "relative",
              right: "0",
              bottom: "0"
            }}
          />
        </Logo>
        <MenuLink href="">Licensing</MenuLink>
        <MenuLink href="">About</MenuLink>
        <MenuLink href="">Newsletter</MenuLink>
        <MenuLink href="">Kontakt</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;



