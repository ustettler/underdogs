import React from "react";
import aboutus_background from "../About/img/Teamfoto.png";

//background: #525291;

export const About = () => {
  //Renderer
  return (
    <>
      {/* Ab hier kommt das HTML rein */}
      <div class="aboutus_container">

        <div id="aboutus_box">
          <h2>Das Team</h2><br/><br/>
          {/* <TextField id="newsletter-subscription" label="E-Mail eintragen" variant="standard" /><br/><br/>
          <Button variant="contained">Newsletter abonnieren</Button> */}
        </div>

        <img
              src={aboutus_background}
              alt="Our Team"
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
