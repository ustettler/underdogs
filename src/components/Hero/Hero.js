import React from "react";
// Styled Components Import
import styled, { css } from 'styled-components';


export const Hero = () => {
  // Css
  const Main = styled.div`
`;
  const Heero = styled.div`
  `;

  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;
    width: 68%;
    height: 30rem;

  @media (max-width: 768px) {
      height: 16rem;
    }
    
  `;

  const P = styled.p`
    width: 720px;
    height: 234px;
    padding-top: 4rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 130%;
    color: #fff;
    flex: none;
    order: 0;
    flex-grow: 0;

  @media (max-width: 768px) {
      font-size: 22px;
      width: 299px;
    }
  `;

  const Button = styled.button`
    box-sizing: border-box;
    margin: 1rem;
    padding: 0px;
    width: 200px;
    height: 50px;
    background: linear-gradient(107.21deg, #C961DE 24.43%, #2954A3 68.95%);
    box-shadow: 0px 10px 20px rgba(8, 12, 33, 0.15);
    border-radius: 30px;
    border-radius: 30px;
    font-family: "Roboto", sans-serif;
    border:none;
    flex: none;
    order: 0;
    flex-grow: 0;
    color: white;

    ${props => props.primary && css`
    background: rgba(255, 255, 255, 0.3);
    color: white;
  `}

  @media (max-width: 768px) {
    width: 133px; 
  }
`;

  return (
    <>
      <Main>
        <Heero>
          <Div>
            <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</P>
          </Div>
          <Button primary>Play</Button>
          <Button>Reading</Button>
        </Heero>
      </Main>
    </>
  );
};

export default Hero;