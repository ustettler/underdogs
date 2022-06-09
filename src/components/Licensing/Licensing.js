import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { Parallax, Background } from "react-parallax";
import IMG from './img/hg.jpg';

import useData from "./useData";
import useColumns from "../Licensing/useColumn";

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
    background: #4F4065;
    color: white;
    font-family: "Poppins", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
  `;

  // Font

  const P = styled.p`
    padding-top: 2rem;
    color: white;
    font-size: clamp(1rem, 1vw, 1.5rem);
    font-weight: 500;
    padding: 3rem 1.5rem 0 2rem;
    text-align: justify;
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
        <H2>Pricing</H2>
        <P>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </P>
        <br />

        <div className="container">
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
        </div>
        <br />
        </Parallax>
      </Main>
    </>
  );
};
