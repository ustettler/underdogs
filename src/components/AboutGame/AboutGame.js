import React from "react";
import styled from "styled-components"
import IMG from './img/hg.jpg';



export const AboutGame = () => {

   //CSS
   const Main = styled.div`
   width: 100vw;
   height: 20rem;
   color: white;
   background-color: #525291;
   font-family: "Poppins", sans-serif;
 `;

 // Font
 const P = styled.p`
 color: white;
 font-size: clamp(1rem, 1vw, 1.5rem);
 font-weight: 500;
 padding: 3rem 1.5rem 0 2rem;
 text-align: center;
 font-family: "Poppins", sans-serif;
`;

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
        <H2>Das Game</H2>
      <div style={{ height: 500 }}>
      <P>Geiles Game, yeaah hier bald mehr über unser SPIEL (ABOUT GAME)</P>
      </div>
      </Main>
    </>
  );
};