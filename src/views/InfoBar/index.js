import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import clock from "./assets/clock.png";
import location from "./assets/location.png";
import phone from "./assets/phone.png";
import email from "./assets/email.png";

const InfoBar = () => (
  <InfoBarContainer>
    <DataTile key={"i-time"}>
      <img src={clock} alt="clock" />
      <h2>Opening Time</h2>
      <p>Monday - Saturday</p>
      <p>9am - 10pm</p>
    </DataTile>
    <DataTile key={"i-location"}>
      <img src={location} alt="location" />
      <h2>Address</h2>
      <p>198 West 21th Street</p>
      <p> Suite 721 New York NY 10016</p>
    </DataTile>
    <DataTile key={"i-phone"}>
      <img src={phone} alt="phone" />
      <h2>Phone</h2>
      <p>+ 001 234 567</p>
      <p>+ 001 234 567</p>
    </DataTile>
    <DataTile key={"i-email"}>
      <img src={email} alt="email" />
      <h2>Email</h2>
      <p>sample@mail.com</p>
      <p>sample2@mail.com</p>
    </DataTile>
  </InfoBarContainer>
);

export default InfoBar;

const DataTile = styled.div`
  text-align: center;
  color: white;
  display: block;
  width: 240px;
  letter-spacing: 0.05rem;
  line-height: 1.3;
  padding: 20px 15px;
  h2 {
    font-weight: 700;
    font-size: 1.1em;
    margin: 8px;
  }
  p {
    opacity: 0.9;
    font-size: 0.9em;
    margin: 0;
    padding: 5px 0;
  }
  img {
    width: 32px;
    height: 32px;
  }
`;

const InfoBarContainer = styled.div`
  width: 100%;
  background-color: #302939;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
`;
