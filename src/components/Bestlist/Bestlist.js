import React from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import IMG from "./img/videoweb.gif";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const Bestlist = () => {
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
    margin-bottom: 2rem;
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const Section1 = styled.div`
    display: flex;
    color: white;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: right;
  `;

  const Section2 = styled.div`
    color: white;
  `;

  const Rank1 = styled.div`
    margin-top: 1rem;
    color: black;
    background: gold;
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    border-radius: 10px;
    border: solid 1px black;
    font-size: 1.3rem;
  `;

  const Rank2 = styled.div`
    color: black;
    background: silver;
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    border-radius: 10px;
    border: solid 1px black;
    font-size: 1.3rem;
  `;

  const Rank3 = styled.div`
    color: black;
    background: #cd7f32;
    padding: 0.5rem;
    border-radius: 10px;
    border: solid 1px black;
    font-size: 1.3rem;
  `;

  const Ribbon = styled.div`
    /* Position */
    left: -64px;
    position: absolute;
    top: 32px;

    /* Size */
    height: 24px;
    width: 206px;

    /* Displayed diagonally */
    transform: rotate(-45deg);

    /* Background color */
    background-color: rgba(0, 0, 0, 0.3);

    /* Centerize the text content */
    text-align: center;
  `;

  // Font
  const H2 = styled.h2`
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 0 0 black, -2px 0 0 black, 0 2px 0 black, 0 -2px 0 black,
      1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  `;

  const H3 = styled.h3`
    padding-top: 2rem;
    text-align: justify; 
    color: white;
    font-size: clamp(1.5rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align:left;
    font-family: "Poppins", sans-serif;
    text-shadow: 2px 0 0 black, -3px 0 0 black, 0 2px 0 black, 0 -2px 0 black, 1px 1px black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black;
  
  // media queries
  
  @media only screen and (max-width : 600px) {
    main{
      height: 50vh;
    } `;

  const H4 = styled.h3`
    padding-top: 2rem;
    text-align: justify; 
    color: white;
    font-size: clamp(1.5rem, 2vw, 3rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align:left;
    font-family: "Poppins", sans-serif;

  
  // media queries
  
  @media only screen and (max-width : 600px) {
    main{
      height: 50vh;
    } `;

  //Renderer
  return (
    <>
      <Main>
        <Parallax bgImage={IMG} strength={500}>
          {/* Ab hier kommt das HTML rein */}
          <H2>Bestenliste</H2>

          <List>
            <Ribbon>TOP TEAMS</Ribbon>
            <Section1>
              <H4>
                <Rank1>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  1. The Players, 19:30:30 Min <br />
                </Rank1>
                <Rank2>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  2. VRGamers, 20:20:30 Min <br />
                </Rank2>
                <Rank3>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  3. Top Team, 21:10:30 Min
                  <br />
                </Rank3>
              </H4>
            </Section1>
            <Section2>
              <H3>
                4. The Fame, 22:09:30 Min <br />
                5. ZüriGamers, 23:08:30 Min <br />
                6. The Bebbis, 24:07:30 Min
                <br />
                7. The Waggis, 25:06:30 Min <br />
                8. FlexerBoys, 26:05:30 Min <br />
                <br />
              </H3>
            </Section2>
          </List>
        </Parallax>
      </Main>
    </>
  );
};
