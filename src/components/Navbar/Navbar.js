// Import ähnmlich wie CDN
import React from "react";
// Styled Components Import
import styled from "styled-components";

// Beginn vom Dokument am anfang kommt die Logik(JS) rein dann CSS nachdem Return das "HTML"

export const Navbar = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    min-height: 20vh;
    background: #87889c;
    color: white;
    font-family: "Roboto", sans-serif;
  `;

  const Nav = styled.div`
    color: red;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
  `;

  // Fonts

  const H1 = styled.h1`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1.5rem, 2vw, 2rem);
    font-weight: 400;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
  `;

  const H3 = styled.h3`
    color: white;
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-weight: 400;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
  `;

  // Breakpoint Handy
  /* @media only screen and (max-width : 900px) {
      display: block;
  
      img{
        margin-top: 0;
        padding-right: 0;
      } */

  //Renderer = Hier kommt das rein was im DOM ist
  return (
    <>
      <Main>
        <Nav>
          <H1>The Underdogs</H1>
          <H3>
            Home // Bestenliste // Gallery // Location // NEWS // Licensing //
            About // Newsletter // Kontakt
          </H3>
        </Nav>
      </Main>
    </>
  );
};
