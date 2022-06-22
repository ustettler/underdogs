import React from "react";
// Styled Components Import
import styled from "styled-components";
import LogoImage from "../Footer/img/image (3).png"

// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Footer = () => {

  // Css
  const Footer = styled.div`
    display: flex;
	  flex-wrap: wrap;
    height: 221px;
    background: #1C1C65;;
  @media (max-width: 768px) {
    overflow-x: hidden;
    display: flex;
    justify-content: space-around;
    }
}
`;

  const Logo = styled.a`
    position: absolute;
    transform: rotate(18.39deg);
    right: 9%;
  @media (max-width: 768px) {
    display: none;
}
`;

  const Div = styled.div`
    padding: 4rem 24rem;
    color: #fff;
  @media (max-width: 768px) {
    padding: 1rem 3rem;
    transform: scale(0.8);
  }
  `;

  const H4 = styled.h4`
    font-size: 13px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;

    ::before{
      content: '';
      position: absolute;
      bottom: -10px;
      background-color:#b7118a;
      height: 2px;
      box-sizing: border-box;
      width: 50px;
    }
    @media (max-width: 768px) {
      display:none
    }
  `;

  const Ul = styled.ul`
    list-style: none;
    width: 14%;
    padding: 1rem 15px;
  `;
  const Li = styled.li`
    padding: 6px;
  @media (max-width: 768px) {
    padding: 1rem 3rem;
    margin-left: -3rem;
}
`;


  const Hr = styled.hr`
    width: 1889px;
    height: 0px;
    margin-left: 1rem;
    background: rgba(255, 255, 255, 0.15);
  `;

  const A = styled.a`
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in;
    &:hover {
      color :#b7118a;
    }

  `;

  const Wrapper = styled.div`
  `;

  const Text = styled.div`
    width: 171px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 143.2%;
    color:#fff;
`;

  //Renderer
  return (
    <>
      <Footer>
        <Ul>
          <H4>Adresse</H4>
          <Li><A href="#"><AddLocationAltIcon sx={{ fontSize: 40 }}></AddLocationAltIcon>Zürich</A></Li>
          <Li><A href="#"><LocalPhoneIcon sx={{ fontSize: 35 }}></LocalPhoneIcon>Telefon</A></Li>
        </Ul>
        <Ul>
          <H4 >Adresse</H4>
          <Li><A href="#"><AddLocationAltIcon sx={{ fontSize: 40 }}></AddLocationAltIcon>Zürich</A></Li>
          <Li><A href="#"><LocalPhoneIcon sx={{ fontSize: 35 }}></LocalPhoneIcon>Telefon</A></Li>
        </Ul>
        <Div>
          <A href="https://www.facebook.com/"> <FacebookIcon sx={{ fontSize: 50 }} ></FacebookIcon></A>
          <A href="https://www.facebook.com/"> <InstagramIcon sx={{ fontSize: 50 }}></InstagramIcon></A>
          <A href="https://www.facebook.com/"> <YouTubeIcon sx={{ fontSize: 50 }}></YouTubeIcon></A>
          <A href="https://www.facebook.com/"> <TwitterIcon sx={{ fontSize: 50 }}></TwitterIcon></A>
        </Div>
        <Logo href="">
          <img src={LogoImage} alt="Logo"
            style={{
              width: "217px",
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


