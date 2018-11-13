import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import posed, { PoseGroup } from "react-pose";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.png";
import "aos/dist/aos.css";

const SpecialitiesTable = props => {
  return (
    <Fragment>
      <SpecTable>
        <img src={s1} />
        <img src={s2} />
        <img src={s3} />
        <img src={s4} />
        <img src={s5} />
        <img src={s6} />
        <img src={s7} />
      </SpecTable>
    </Fragment>
  );
};

const Specialities = () => (
  <SpecialitiesContainer>
    <BackgroundText text={"Specialities"} />
    <SectionTitle text={"Specialities"} />
    <TableContainer>
      <SpecialitiesTable />
    </TableContainer>
  </SpecialitiesContainer>
);

export default Specialities;

const SpecTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

const TableContainer = styled.div`
  margin: 50px 5%;
`;

const SpecialitiesContainer = styled.div`
  position: relative;
  min-height: 500px;
  text-align: center;
`;
