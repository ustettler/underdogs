import React from "react";
import styled from "styled-components";

export const Location = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: 20vh;
    background: #4f4065;
    color: white;
    font-family: "Roboto", sans-serif;
  `;

  const List = styled.div`
    width: 100vw;
    min-height: 40vh;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const Section1 = styled.div`
    color: white;
  `;

  const Section2 = styled.div`
    color: white;
  `;

  // Font
  const H2 = styled.h1`
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
  `;

  const H3 = styled.h1`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
  
  @media only screen and (max-width : 600px) {
    main{
      height: 50vh;
    } `;

  //Renderer
  return (
    <>
      <Main>
        {/* Ab hier kommt das HTML rein */}
        <H2>Location</H2>
      </Main>
    </>
  );
};
