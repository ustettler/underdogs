import React from "react";
import styled from "styled-components";
import IMG from "./img/hg.jpg";

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
    padding: 1rem 2rem 0 2rem;
    text-align: left;
    font-family: "Poppins", sans-serif;
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
        <H2>Das Game</H2>
        <div>
          <P>
            Unbekannt und tödlich. Die Welt steht vor einer Katastrophe
            ungeahnten Ausmasses. Der Ursprung von " Plague " wird in einem
            geheimen, stillgelegten Labor vermutet. Ihr Team und Sie haben den
            Auftrag, den ursprünglichen Erreger zu Forschungszwecken zu finden.
            In der Hoffnung, seine Schwachstelle zu finden und ein Gegenmittel
            herzustellen. Die bisherigen Versuche, Plague aus kontaminierten
            Menschen zu extrahieren, sind gescheitert. Deshalb ruhen die
            Hoffnungen der Menschheit auf Ihren Schultern. Sind Sie klug genug,
            um einen Weg durch das Labor zu finden?
          </P>
        </div>
      </Main>
    </>
  );
};
