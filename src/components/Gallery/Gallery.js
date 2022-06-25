import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

export const Gallery = () => {
  const images = [
    {
      original: 'https://web-man.ch/udpic/pic.jpg',
      thumbnail: 'https://web-man.ch/udpic/pic.jpg',
    },
    {
      original: 'https://web-man.ch/udpic/pic1.jpg',
      thumbnail: 'https://web-man.ch/udpic/pic1.jpg',
    },
    {
      original: 'https://web-man.ch/udpic/pic2.jpg',
      thumbnail: 'https://web-man.ch/udpic/pic2.jpg',
    },
  ];
  
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    background: #525291;
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
        <H2>Gallerie</H2>
        <br />
        <ImageGallery items={images} />
        <br />
      </Main>
    </>
  );
};
