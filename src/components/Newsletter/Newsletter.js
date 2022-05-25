// Import ähnmlich wie CDN
import React from "react";
import TextField from '@mui/material/TextField';
import TextField from '@mui/material/Button';
import newsletter_background from "../Newsletter/img/newsletter-background.png";

// Beginn vom Dokument am anfang kommt die Logik rein

export const Newsletter = () => {
  //Renderer
  return (
    <>
      {/* Ab hier kommt das HTML rein */}
      

      <div class="newsletter_container">

        <div id="newsletter_box">
          <h1>Für Newsletter anmelden</h1>
          <TextField id="newsletter-subscription" label="Email" variant="standard" />
        </div>

        <img
              src={newsletter_background}
              alt="VR Escape Game"
              style={{
                width: "100%",
                height: "auto",
                backgroundSize: "cover",
              }}
            />
      </div>

    </>
  );
};
