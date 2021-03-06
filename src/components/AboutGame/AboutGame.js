import React from "react";
import styled from "styled-components";
import IMG from "./img/underdog.JPG";

export const AboutGame = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    color: white;
    background-color: #525291;
    font-family: "Poppins", sans-serif;
  `;

  // Font
  const P = styled.p`
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 1rem 2rem 2rem 2rem;
    text-align: left;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 80%;

 
    @media only screen and (max-width : 600px) {
        width: 90%;
  `;

  const H2 = styled.h2`
   color: white;
   font-size: 2rem;
   font-weight: 600;
   padding: 1rem 1.5rem 0 2rem;
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
        <H2>Project Kennedy - Das Game</H2>
        <div>
          <P>
            Unbekannt und tödlich. Die Welt steht vor einer Katastrophe
            ungeahnten Ausmasses. <br /> Der Ursprung von " Plague " wird in
            einem geheimen, stillgelegten Labor vermutet. Ihr Team und Sie haben
            den Auftrag, den ursprünglichen Erreger zu Forschungszwecken zu
            finden. In der Hoffnung, seine Schwachstelle zu finden und ein
            Gegenmittel herzustellen. <br /> Die bisherigen Versuche, Plague aus
            kontaminierten Menschen zu extrahieren, sind gescheitert. Deshalb
            ruhen die Hoffnungen der Menschheit auf Ihren Schultern. Sind Sie
            klug genug, um einen Weg durch das Labor zu finden?
          </P>
          <img src={IMG} alt="underdogs" width="50%" height="auto"></img>
        </div>
      </Main>
    </>
  );
};
