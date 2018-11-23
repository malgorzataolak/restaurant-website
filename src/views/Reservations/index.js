import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import posed, { PoseGroup } from "react-pose";
import Textfield from "./Textfield";
import Calendar from "./Calendar";
import DropdownMenu from "./DropdownMenu";

class Reservations extends Component {
  render() {
    return (
      <ReservationsContainer>
        <BackgroundText text={"Reservations"} />
        <SectionTitle text={"Book a table"} />
        <FormContainer>
          <Textfield
            type={"text"}
            inputName={"First Name"}
            name={"first_name"}
          />
          <Textfield type={"text"} inputName={"Last Name"} name={"last_name"} />
          <label>Number of Guests</label>
          <DropdownMenu />
          <label>Pick a date</label>
          <Calendar />
          <label>Pick an hour</label>
          <DropdownMenu />
        </FormContainer>
      </ReservationsContainer>
    );
  }
}

export default Reservations;

const FormContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const ReservationsContainer = styled.div`
  background-color: antiquewhite;
  padding: 70px 0px;
  min-height: 500px;
  position: relative;
  text-align: center;
`;
