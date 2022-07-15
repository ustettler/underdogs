import React from "react";
// Styled Components Import
import styled from "styled-components";
import LogoImage from "../Footer/img/image (3).png"
//import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// icon
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

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
    color: #fff;
    position: relative;
    left: 37%;
    padding: 2rem 3rem;
    margin: 1rem;
  @media (max-width: 768px) {
    padding: 1rem 3rem;
    position: relative;
    left: 0;
    transform: scale(0.8);
  }
  `;

  //   const Ul = styled.ul`
  //     list-style: none;
  //     width: 14%;
  //     padding: 1rem 15px;
  //   `;
  //   const Li = styled.li`
  //     padding: 6px;
  //   @media (max-width: 768px) {
  //     padding: 1rem 3rem;
  //     margin-left: -3rem;
  // }
  // `;

  const Hr = styled.hr`
    width: 1889px;
    height: 0px;
    margin-left: 1rem;
    margin-right: 1rem;
    background: rgba(255, 255, 255, 0.15);
  `;

  const A = styled.a`
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease-in;
    &:hover {
      color :#525291;
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
        {/* <Ul>
          <H4>Adresse</H4>
          <Li><A href="#"><AddLocationAltIcon sx={{ fontSize: 40 }}></AddLocationAltIcon>Zürich</A></Li>
          <Li><A href="#"><LocalPhoneIcon sx={{ fontSize: 35 }}></LocalPhoneIcon>Telefon</A></Li>
        </Ul> */}
        <Div>
          <A href="https://www.facebook.com/"> <FacebookIcon sx={{ fontSize: 50 }} ></FacebookIcon></A>
          <A href="https://www.facebook.com/"> <InstagramIcon sx={{ fontSize: 50 }}></InstagramIcon></A>
          <A href="https://www.facebook.com/"> <YouTubeIcon sx={{ fontSize: 50 }}></YouTubeIcon></A>
          <A href="https://www.facebook.com/"> <TwitterIcon sx={{ fontSize: 50 }}></TwitterIcon></A>
        </Div>
        <Logo href="">
          <img src={LogoImage} alt="Logo"
            style={{
              width: "200px",
            }}
          />
        </Logo>
        <Hr></Hr>
        <Wrapper>
          <Text>&copy;the-underdogs 2022 |  <Popup    trigger={open => (      <button className="button">Impressum {open ? '' : ''}</button>    )}    position="top left"    closeOnDocumentClick  >    <span> KONTAKTADRESSE
Underdogs
Buckhauserstrasse24
8048 Zurich,
Schweiz
info@projectkennedy.ch
VERTRETUNGS-<br/>
BERECHTIGTE PERSONEN<br/>
Hans Müller, <br/>Geschäftsführer
HAFTUNGSAUSSCHLUSS
Der Autor ubernimmt keinerlei Gewähr hinsichtlich der Inhaltlichen Richtigkeit, Genauigkeit, Aktualitat, Zuverlassigkeit und Vollständigkeit der Informationen
Hattungsanspruche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzuna bzw. Nichtnutzung der
veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind
unverbindlich. Der Autor behalt es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen<br/>
HAFTUNG FÜR LINKS<br/>
Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der
Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
URHEBERRECHTE<br/>
Die Urheber- und alle anderen Rechte an Inhalten. Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Underdogs oder den
speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholer
QUELLE<br/>
Dieses Impressum wurde am 8.07.2022 mit dem Impressum Generator der Webdesign Agentur Webkönig erstellt. Die Agentur
Webkönig übernimmt keine Haftung</span>  </Popup>
            </Text>
            </Wrapper>
      </Footer>
    </>
  );
};

export default Footer;


