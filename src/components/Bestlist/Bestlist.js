import React from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import IMG from "./img/hg.jpg";
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
    color: white;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const Section1 = styled.div`
  display:flex;ß
    color: white;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: right
 
  `;

  const Section2 = styled.div`
    color: white;
  `;

  const Rank1 = styled.div`
    color: white;
    background: gold;
    padding: 0.1rem;
    border-radius: 10px;
    border: solid 1px black;
  `;

  const Rank2 = styled.div`
    color: white;
    background: silver;
    padding: 0.1rem;
    border-radius: 10px;
    border: solid 1px black;
  `;

  const Rank3 = styled.div`
    color: white;
    background: #cd7f32;
    padding: 0.1rem;
    border-radius: 10px;
    border: solid 1px black;
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
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 600;
    padding: 3rem 1.5rem 0 2rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
  `;

  const H3 = styled.h3`
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
            <Ribbon>Bestenliste</Ribbon>
            <Section1>
              <H3>
                <Rank1>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  1. The Players, 23:30:30 Min <br />
                </Rank1>
                <Rank2>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  2. The Players, 23:30:30 Min <br />
                </Rank2>
                <Rank3>
                  <EmojiEventsIcon
                    style={{
                      paddingTop: ".2rem",
                      marginRight: ".5rem",
                    }}
                  />
                  3. The Players, 23:30:30 Min
                  <br />
                </Rank3>
                4. The Players, 23:30:30 Min <br />
                5. The Players, 23:30:30 Min <br />
              </H3>
            </Section1>
            <Section2>
              <H3>
                6. The Players, 23:30:30 Min <br />
                7. The Players, 23:30:30 Min <br />
                8. The Players, 23:30:30 Min
                <br />
                9. The Players, 23:30:30 Min <br />
                10. The Players, 23:30:30 Min <br />
                <br />
              </H3>
            </Section2>
          </List>
        </Parallax>
      </Main>
    </>
  );
};
