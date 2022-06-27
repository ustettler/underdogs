import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
//Mui
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import PeopleIcon from '@mui/icons-material/People';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PersonIcon from '@mui/icons-material/Person';


import useData from "./useData";
import useColumns from "../Licensing/useColumn";
import { height } from "@mui/system";

//import makeData from "./makeData";

export const Licensing = () => {
  const data = useData();
  const columns = useColumns();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  //CSS
  const Main = styled.div`
    width: 100vw;
    height: auto;
    color: white;
    display: flex;
    justfy-centent: center;
    align-items: center;
    flex-direction: column;
    background-color: #525291;
    font-family: "Poppins", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
  `;


  const Requirement = styled.div`
    
    width: 40vw;
    border: 3px solid white;
    border-radius: 10px;
    margin: 2rem 0 2rem 0;

    @media only screen and (max-width : 700px) {
        width: 90vw;
      } `;


  // Font

  const P = styled.p`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: left;
    font-family: "Poppins", sans-serif;
  `;

  const H2 = styled.h2`
    padding-top: 2rem;
    color: white;
    font-size: clamp(2rem, 2.5vw, 3.5rem);
    font-weight: 600;
    padding: 3rem 1.5rem 0 0;
    text-align: center;
    font-family: "Poppins", sans-serif;
`;

    const H3 = styled.h2`
    padding-top: 1rem;
    color: white;
    font-size: clamp(1.2rem, 1.5vw, 2.5rem);
    font-weight: 600;
    padding: 1rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    text-align: left;
   
    `;

  //Renderer
  return (
    <>
      <Main>     
        {/* Ab hier kommt das HTML rein */}
        <H2>Lizenzierung - B2B</H2>
        <P>
          Falls du ein VR-Center hast und unser Spiel gerne in dein Angebot aufnehmen  möchtest, <br/>nehme via 
          Kontaktformular mit uns Kontakt auf oder Rufe uns an.
          </P>
          <Requirement>
          <H3> 
          <strong>ECKDATEN</strong>
          <br/>
          <small>
          <LinearScaleIcon  style={{
              paddingTop: ".5rem",
            }}/>&nbsp;10 x 10m Spielfläche<br/>
 <PeopleIcon style={{
              paddingTop: ".5rem",
            }}/>&nbsp; 2 - 5 Player<br/>
          <AvTimerIcon  style={{
              paddingTop: ".5rem",
            }}/> &nbsp;Dauer: 30min<br/>
          <VideogameAssetIcon  style={{
              paddingTop: ".5rem",
            }}/> &nbsp;Game Genre: Escape Room<br/>
          <PersonIcon  style={{
              paddingTop: ".5rem",
            }}/>&nbsp;Standalone VR-Brillen<br />
          <CloudUploadIcon  style={{
              paddingTop: ".5rem",
            }}/>&nbsp;Gratis Deploy! <br />
            </small>
<CelebrationIcon style={{
              marginTop: "1rem",
            }}/><b >&nbsp;Zufriedene Kunden ;)</b><br />
          </H3>
        </Requirement>
      

        {/* <div className="container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div> */}
        <br />
      </Main>
    </>
  );
};
