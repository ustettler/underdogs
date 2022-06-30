import React, { useEffect, useRef } from "react";
import HeroVideo from "../Hero/Video/videoweb.mp4";
// Styled Components Import
import styled from "styled-components";

export const Hero = () => {
  // Css
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const Div = styled.div``;

  const Video = styled.video`
    margin: 5rem 0px -0.3rem;
    @media (max-width: 768px) {
      margin: 3rem 0px -0.3rem;
    }
  `;

  return (
    <Div>
      <Video
        style={{ maxWidth: "100%", width: "100%" }}
        playsInline
        loop
        // controls
        alt="HeroVideo"
        src={HeroVideo}
        ref={videoEl}
      />
    </Div>
  );
};

export default Hero;
