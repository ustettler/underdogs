import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const Gallery = () => {
  const images = [
    {
      original: "https://web-man.ch/udpic/pic2.jpg",
      thumbnail: "https://web-man.ch/udpic/pic2.jpg",
    },
    {
      original: "https://web-man.ch/udpic/pic1.jpg",
      thumbnail: "https://web-man.ch/udpic/pic1.jpg",
    },
    {
      original: "https://web-man.ch/udpic/pic.jpg",
      thumbnail: "https://web-man.ch/udpic/pic.jpg",
    },
  ];

  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    background: black;
    color: white;
    font-family: "Poppins", sans-serif;
  `;

  // Font
  const H2 = styled.h2`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 1.5rem 1rem 2rem;
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

        <ImageGallery items={images} />
        <br />
      </Main>
    </>
  );
};
