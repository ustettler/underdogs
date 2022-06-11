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
    padding: 3rem 1.5rem 0 0;
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
    padding: 3rem 1.5rem 0 2rem;
    text-align: justify;
    font-family: "Poppins", sans-serif;
    margin: auto;
    width: 60%;
 
    @media only screen and (max-width : 600px) {
        width: 90%;
      `;

  const H2 = styled.h2`
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 600;
    padding: 3rem 1.5rem 0 0;
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
            <div
              className="title"
              data-swiper-parallax="-300"
            >
              <H3> News 1</H3>
            </div>
            <br />
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </P>
              <br />
              <br />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <H3> News 2</H3>
            </div>
            <br />
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </P>
              <br />
              <br />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              <H3>News 3</H3>
            </div>
            <br />
            <div
              className="text"
              data-swiper-parallax="-100"
              style={{
                textAlign: "left",
              }}
            >
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
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
