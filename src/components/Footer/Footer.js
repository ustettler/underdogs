import React from "react";
// Styled Components Import
import styled from "styled-components";
import LogoImage from "../Footer/img/image (1).png"

// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {

  // Css
  const Footer = styled.div`
    height: 221px;
    background: #1C1C65;
  @media (max-width: 768px) {
    height: 159px;
    overflow-x: hidden;
    }
}
`;

  const Logo = styled.a`
  // position: absolute;
  //   right: 80%;
  //   transform: rotate(-18.61deg);
  display: none;
  @media (max-width: 768px) {
  display: none;
}
`;

  const Div = styled.div`
    padding: 4rem;
    color: aliceblue;
    transform: scale(1.8);
  @media (max-width: 768px) {
    overflow-x: hidden;
    padding: 2rem;
  }
  `;

  const Hr = styled.hr`
    width: 1889px;
    margin-left: 1rem;
    background: rgba(255, 255, 255, 0.15);
  `;

  const A = styled.a`
    color: #fff;
    text-decoration: none;
  `;

  const Wrapper = styled.div`
  `;

  const Text = styled.div`
    width: 165px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 143.2%;
    color: rgba(255, 255, 255, 0.7);
`;
  //Renderer
  return (
    <>
      <Footer>
        <Div>
          <A href="https://www.facebook.com/"> <FacebookIcon></FacebookIcon></A>
          <A href="https://www.facebook.com/"> <InstagramIcon></InstagramIcon></A>
          <A href="https://www.facebook.com/"> <YouTubeIcon></YouTubeIcon></A>
          <A href="https://www.facebook.com/"> <TwitterIcon></TwitterIcon></A>
        </Div>
        <Logo href="">
          <img src={LogoImage} alt="Logo"
            style={{
              width: "140px",
            }}
          />
        </Logo>
        <Hr></Hr>
        <Wrapper>
          <Text>&copy;the-underdogs 2022</Text>
        </Wrapper>
      </Footer>
    </>

  );

};

export default Footer;
