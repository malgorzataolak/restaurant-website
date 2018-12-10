import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import posed, { PoseGroup } from "react-pose";
import Textfield from "./Textfield";
import Calendar from "./Calendar";
import DropdownMenu from "./DropdownMenu";

class Reservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      guests: null,
      date: null,
      hour: null,
      guests_placeholder: null,
      hour_placeholder: null
    };
    this.mounted = false;
    this.guest_items = null;
    this.hour_items = [];

    this.chooseOption = this.chooseOption.bind(this);
  }

  componentDidMount() {
    this.guest_items = Array.from({ length: 6 }, (v, k) => k + 1);

    for (let i = 12; i <= 21; i++) {
      console.log(i);
      for (let j = 0; j < 60; j = j + 15) {
        console.log(j);
        if (j == 0) {
          this.hour_items.push(`${i}:00`);
        } else {
          this.hour_items.push(`${i}:${j}`);
        }
      }
    }
    this.setState({
      guests_placeholder: "Choose guests number",
      hour_placeholder: "Choose hour"
    });
    this.mounted = true;
  }

  chooseOption(value, mode) {
    console.log("option handler", value, mode);
    if (mode == "guests") {
      this.setState({ guests: value, guests_placeholder: null });
    } else if (mode == "hour") {
      this.setState({ hour: value, hour_placeholder: null });
    } else return null;
  }

  render() {
    if (!this.mounted) return null;

    console.log("reservations", this.state, this.hour_items);
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
          <DropdownMenu
            placeholder={this.state.guests_placeholder}
            current={this.state.guests}
            list={this.guest_items}
            name={"guests"}
            handler={this.chooseOption}
          />
          <Calendar />
          <DropdownMenu
            placeholder={this.state.hour_placeholder}
            current={this.state.hour}
            list={this.hour_items}
            name={"hour"}
            handler={this.chooseOption}
          />
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
