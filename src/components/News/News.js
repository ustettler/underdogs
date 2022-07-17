import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../index.css";

//import required modules
import { Parallax, Pagination, Navigation } from "swiper";

export const News = () => {
  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    background: #525291;
    color: white;
    font-family: "Poppins", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
  `;

  // Font
  const H3 = styled.h3`
    margin: 2rem 0 0 2rem;
    text-align: center;
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: left;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 60%;
 
    @media only screen and (max-width : 600px) {
      width: 90%;
    `;

  const P = styled.p`
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 2em 1.5rem 0 2rem;
    text-align: justify;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 60%;

 
    @media only screen and (max-width : 600px) {
        width: 90%;
      `;

  const H2 = styled.h2`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 1.5rem 0 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
 
    
  
  @media only screen and (max-width : 600px) {
    main{
      height: 50vh;
    } 
    `;

  //Renderer
  return (
    <>
      <Main>
        {/* Ab hier kommt das HTML rein */}
        <H2>News</H2>
        <br />
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={200}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <H3>12.08.2022 - MVP ist bereit</H3>
            </div>
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
                Der MVP des Games ist fertig und wird derzeitig ausgiebig getestet.
              </P>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <H3>27.07.2022 - Project Kennedy ist bereit</H3>
            </div>
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
              Project Kennedy ist bereit für Investoren die über die nächsten 3 Jahre 2.8 Milionen in die
                Produkte von The Undergods investieren wollen.
              </P>
              <br />
              <br />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <H3>19.06.2022 - Testlauf geglückt</H3>
            </div>
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
                Die ersten Tests haben gezeigt, dass das Spielerlebnis von
                Project Kennedy noch nie dagewesene Höhen erreicht. Die Kritiker
                und Community sind sich sicher das… weiterlesen.
              </P>
              <br />
              <br />
            </div>
          </SwiperSlide>
        </Swiper>
        <br />
        <br />
      </Main>
    </>
  );
};
