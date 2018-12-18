import React, { Component, Fragment } from "react";
import BackgroundText from "../../components/BackgroundText";
import SectionTitle from "../../components/SectionTitle";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import Textfield from "../Reservations/Textfield";
import "aos/dist/aos.css";

const Contact = () => (
  <ContactContainer>
    <BackgroundText text={"Contact"} />

    <Grid>
      <MapContainer>
        <iframe
          width="400"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=19.92377042770386%2C50.0560091039212%2C19.952094554901127%2C50.06817234453136&amp;layer=mapnik&amp;marker=50.06209110972986%2C19.93793249130249"
        />
        <br />
        <small>
          <a href="https://www.openstreetmap.org/?mlat=50.0621&amp;mlon=19.9379#map=16/50.0621/19.9379">
            Display larger map
          </a>
        </small>
      </MapContainer>
      <FormContainer>
        <SectionTitle text={"Contact"} />
        <SubTitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium
        </SubTitle>
        <Textfield type={"text"} inputName={"Your Name"} name={"name"} />
        <Textfield type={"text"} inputName={"Email"} name={"email"} />
        <Textfield
          type={"text"}
          inputName={"Message"}
          name={"message"}
          textarea={true}
        />
      </FormContainer>
    </Grid>
  </ContactContainer>
);

export default Contact;

const FormContainer = styled.div`
  grid-column: 2/3;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const MapContainer = styled.div`
  grid-column: 1/2;
  padding-top: 30px;

  a {
    color: black;
    &:hover {
      color: #302939;
    }
  }
`;

const SubTitle = styled.div`
  padding: 15px 0px;
  width: 70%;
  margin: 0 auto;
  color: black;
`;

const ContactContainer = styled.div`
  background-color: white;
  padding: 70px 50px;
  min-height: 500px;
  position: relative;
  text-align: center;
`;
