import React from "react";
import styled from "styled-components";
//import SwissMap from "../Location/img/ch-karte.png";
import { Parallax, Background } from "react-parallax";
import IMG from "./img/hg.jpg";

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
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 600;
    padding: 3rem 1.5rem 0 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 0 0 black, -3px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
      1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  `;

  const P = styled.p`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 80%;
    text-shadow: 2px 0 0 black, -3px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
      1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  `;

  const H3 = styled.h1`
    padding-top: 1rem;
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
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
                VR-City Zürich <br />{" "}
                <a
                  href={"https://vrcity.ch"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.3462088348188!2d8.500996551301704!3d47.385677511103935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900ba6caf500a3%3A0x14707ccf270e57c0!2sVR%20City%20-%20Virtual%20Reality%20Center%20%26%20Escape%20Room!5e0!3m2!1sde!2sfr!4v1654946221559!5m2!1sde!2sfr"
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
            <div className="google-map-code">
              <H3>
                VR-Center Basel <br />{" "}
                <a
                  href={"https://vr-centerbasel.ch"}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.2293040287764!2d7.618790251306044!3d47.54386570020041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9b3d36ba373%3A0x283f1b73e6975592!2sVirtual%20Reality%20VR%20Center%2C%20Escape%20Room%20und%20Laser%20Tag!5e0!3m2!1sde!2sfr!4v1654946508907!5m2!1sde!2sfr"
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
            <div className="google-map-code">
              <H3>
                Fusion Arena Bern <br />{" "}
                <a
                  href={"https://bern.fusionarena.ch/"}
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                  target="_blank"
                >
                  Website
                </a>{" "}
              </H3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2722.9457578815377!2d7.4617723512901515!3d46.962755740121594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39125f48b48d%3A0xe53e59fd338b3437!2sFusion%20Arena%20Virtual%20Reality%20Center%20Bern!5e0!3m2!1sde!2sfr!4v1654946580801!5m2!1sde!2sfr"
                width="300"
                height="225"
                frameborder="0"
                style={{ border: 0, margin: 20 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
            <P>
              Falls das Spiel inn deinem lieblings VR-Center nicht erhältlich
              ist, lass es uns via Kontaktformular wissen. <br />
              Gerne schauen wir mit dem VR-Center, das sie uns in ihre Sortiment
              aufnehmen.
            </P>
          </Maps>
          <br />
        </Parallax>
      </Main>
    </>
  );
};
