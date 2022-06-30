// Import ähnmlich wie CDN
import React from "react";
import { Grid, TextField, Button, Card, CardContent, Typography, Select, MenuItem } from '@mui/material';
import doggy from "../Contact/img/doggy.png";

// Beginn vom Dokument am anfang kommt die Logik rein

export const Contact = () => {
  //Renderer
  return (
    <>
      {/* Ab hier kommt das HTML rein */}
      <div className="contact"> 
      <h2>
        Kontakt
       </h2>
       {/* <Typography gutterBottom variant="h3" align="center">
        Kontakt
       </Typography> */}
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Haben Sie Fragen?
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fülle das Formular aus und das Team tretet mit dir in Kontakt ASAP.
          </Typography> 
            <form>
              <Grid container spacing={1}>
              <img
              src={doggy}
              alt="Our Team"
              style={{
                width: "100%",
                height: "auto",
                backgroundSize: "cover",
              }}
            />
                <Grid item xs={12}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue={10}
                      /* value={age} */
                      label="Age"
                      /* onChange={handleChange} */
                    >
                      <MenuItem value={10}>Kontaktanfrage</MenuItem>
                      <MenuItem value={20}>Supportanfrage</MenuItem>
                      <MenuItem value={30}>Verkaufsanfrage</MenuItem>
                    </Select>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Vorname eingeben.." label="Vorname" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Nachnamen eingeben.." label="Nachname" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="E-Mail eingeben.." label="E-Mail" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Telefonnummer eingeben" label="Telefonnummer" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Nachricht" multiline rows={4} placeholder="Nachricht eingeben" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Senden</Button>
                </Grid>

                
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    </>
  );
};
