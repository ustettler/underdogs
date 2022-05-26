import React from "react";
import styled from "styled-components";
import SwissMap from "../Location/img/ch-karte.png";

export const Location = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
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

  // Img
  const Img = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 4rem;
  `;

  // Font

  const H2 = styled.h2`
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 600;
    padding: 3rem 1.5rem 0 0;
    text-align: center;
    font-family: "Roboto", sans-serif;
  `;

  const P = styled.p`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
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
        <br />
        <P>Hier findet man VR Center mit unserem Game</P>
        <br />
        <div className="google-map-code">
          <H3>Zürich</H3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.3942795001726!2d8.490186651890326!3d47.384739479068415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900bcc0b75b2bf%3A0xb8c540464b5183c5!2sSAE%20Institute%20Z%C3%BCrich!5e0!3m2!1sde!2sfr!4v1653558742423!5m2!1sde!2sfr"
            width="300"
            height="225"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <br />
        <div className="google-map-code">
          <H3>Basel</H3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.0197279479453!2d7.604915851894271!3d47.56740457907985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9c0b78fba6d%3A0x2b13ef74fa82d666!2sBasel%20Bad%20Bf!5e0!3m2!1sde!2sfr!4v1653567535213!5m2!1sde!2sfr"
            width="300"
            height="225"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <br />
        <div className="google-map-code">
          <H3>Bern</H3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.677321055262!2d7.437444251880967!3d46.94838072904421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39bedb177ed3%3A0xba48565cab2cc5d3!2sBahnhof%20Bern!5e0!3m2!1sde!2sfr!4v1653567638785!5m2!1sde!2sfr"
            width="300"
            height="225"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <br />
      </Main>
    </>
  );
};
