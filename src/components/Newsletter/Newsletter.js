// Import ähnmlich wie CDN
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import newsletter_background from "../Newsletter/img/newsletter-background.png";
import styled from "styled-components";

// Beginn vom Dokument am anfang kommt die Logik rein

export const Newsletter = () => {
  //CSS
  const Main = styled.div`
  width: 100vw;
  height: 20rem;
  color: white;
  background-color: #525291;
  font-family: "Poppins", sans-serif;

  @media only screen and (max-width : 600px) {
    main{
      height: 50vh;
    } `;


  //Renderer
  return (
    <>
      {/* Ab hier kommt das HTML rein */}
      <div class="newsletter_container">
        <div id="newsletter_box">
          <h2>Newsletter Anmeldung</h2><br/><br/>
          

          <TextField sx={{ input: { color: 'white' } }} id="newsletter-subscription" label="E-Mail hier eintragen" variant="standard"  
          InputLabelProps={{
            style: { color: '#fff' },
          }}/>
          <br/>
          <br/>
          <Button variant="contained">Newsletter abonnieren</Button>
        </div>

      </div>
    </>
  );
};
