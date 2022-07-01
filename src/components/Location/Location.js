import React from "react";
import styled from "styled-components";
//import SwissMap from "../Location/img/ch-karte.png";
import { Parallax, Background } from "react-parallax";
import IMG from "../Bestlist/img/videoweb.gif";

export const Location = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    background: #4f4065;
    color: white;
    font-family: "Poppins", sans-serif;
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

  // Img
  const Img = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
  `;

  const Maps = styled.div`
    width: 100vw;
    height: auto;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `;

  // Font
  const H2 = styled.h2`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 1.5rem 0 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 0 0 black, -3px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
      1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  `;

  const P = styled.p`
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 1rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 80%;
    text-shadow: 0px 0 0 black, -0px 0 0 black, 0 0px 0 black, 0 1px 0 black,
      0px 0px black, -0px -1px 0 black, 1px -0px 0 black, -0px 0px 0 black;
  `;

  const H3 = styled.h1`
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
    font-weight: 500;
    padding: 1rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 0 0 black, -3px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;


  
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
          <H2>Ort</H2>
          <br />
          <P>Hier die VR-Center die unser Game im Sortiment haben.</P>
          <br />
          <Maps>
            <div className="google-map-code">
              <H3>
                SAE Zürich <br />{" "}
                <a
                  href={"http://www.sae.edu/che/"}
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                  target="_blank"
                >
                  Website
                </a>
              </H3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.3940962684296!2d8.488158889559696!3d47.38474305460733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bcc0b75b2bf%3A0xb8c540464b5183c5!2sSAE%20Institute%20Z%C3%BCrich!5e0!3m2!1sde!2sfr!4v1656353049756!5m2!1sde!2sfr"
                width="300"
                height="225"
                frameborder="0"
                style={{ border: 0, margin: 20 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <br />
          </Maps>
          <br />
        </Parallax>
      </Main>
    </>
  );
};
