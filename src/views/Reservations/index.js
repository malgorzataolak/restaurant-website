import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import posed, { PoseGroup } from "react-pose";

class Reservations extends Component {
  render() {
    return (
      <ReservationsContainer>
        <BackgroundText text={"Reservations"} color={"white"} />
        <SectionTitle text={"Book a table"} color={"white"} />
      </ReservationsContainer>
    );
  }
}

export default Reservations;

const ReservationsContainer = styled.div`
  background-color: #302939;
  padding: 70px 0px;
  min-height: 500px;
  position: relative;
  text-align: center;
`;
