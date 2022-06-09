import React from "react";
import styled from "styled-components"
import IMG from './img/hg.jpg';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";


export const AboutGame = () => {

   //CSS
   const Main = styled.div`
   width: 100vw;
   height: 20rem;
   color: white;
   font-family: "Poppins", sans-serif;
 `;

 // Font
 const H2 = styled.h2`
   padding-top: 2rem;
   color: white;
   font-size: clamp(2rem, 2.5vw, 3.5rem);
   font-weight: 600;
   padding: 3rem 1.5rem 0 2rem;
   text-align: center;
   font-family: "Poppins", sans-serif;

 
 @media only screen and (max-width : 600px) {
   main{
     height: 50vh;
   } `;

  //Renderer
  return (
    <>
    <Main>
      {/* Ab hier kommt das HTML rein */}
      <Parallax bgImage={IMG} strength={500}>
        <H2>About Game</H2>
      <div style={{ height: 500 }}>
      </div>
      </Parallax>
      </Main>
    </>
  );
};