import React, { useState } from "react";
import HeroImage from "../Hero/img/escape-pic.png";
// Styled Components Import
import styled from "styled-components";

export const Hero = () => {
  //const [state, setState] = useState({});

  const Main = styled.div`
    width: 100vw;
    height: auto;
    color: white;
    font-family: "Roboto", sans-serif;
  `;

  const Heero = styled.div`
    width: 100vw;
  `;

  return (
    <>
      <Main>
        <Heero>
          {/* HTML Tags ohne schluss Tags immer mit "/" schliessen - XML. */}
          <img
            src={HeroImage}
            alt="VR Escape Game"
            style={{
              width: "100%",
              height: "auto",
              backgroundSize: "cover",
            }}
          />
        </Heero>
      </Main>
    </>
  );
};
