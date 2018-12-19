import React, { Component } from "react";
import BackgroundText from "../../components/BackgroundText";
import SectionTitle from "../../components/SectionTitle";
import styled from "styled-components";
import Textfield from "../Reservations/Textfield";
import Button from "../../components/Button";
import "aos/dist/aos.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    let payload = {};
    for (let i = 0; i < this.formRef.current.elements.length; i++) {
      let input_element = this.formRef.current.elements[i];
      if (input_element.name == "") continue;
      if (input_element.name != "" && !input_element.value) return;
      payload[input_element.name] = input_element.value;
    }

    console.log("payload", payload);

    //not working fetch example

    const url = "http://sampleurl.com/send_message";
    let headers = {
      "Access-Control-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    return fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(payload)
    })
      .then(response => {
        let status = response.status;
        let json = response.json();
        if (status === 200) {
          return json;
        } else {
          console.log("It doesn't work");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <ContactContainer>
        <BackgroundText text={"Contact"} />

        <Grid>
          <MapContainer data-aos="fade-up" data-aos-duration="1940">
            <a href="https://www.openstreetmap.org/?mlat=50.0621&amp;mlon=19.9379#map=16/50.0621/19.9379">
              Display larger map
            </a>

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
          </MapContainer>
          <FormContainer data-aos="fade-up" data-aos-duration="2000">
            <SectionTitle text={"Contact"} />
            <SubTitle>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </SubTitle>
            <InputsContainer>
              <form ref={this.formRef}>
                <Textfield
                  type={"text"}
                  inputName={"Your Name"}
                  name={"name"}
                />
                <Textfield type={"text"} inputName={"Email"} name={"email"} />
                <Textfield
                  type={"text"}
                  inputName={"Message"}
                  name={"message"}
                  textarea={true}
                />
                <Button text={"Send"} onClickHandler={this.sendMessage} />
              </form>
            </InputsContainer>
          </FormContainer>
        </Grid>
      </ContactContainer>
    );
  }
}

export default Contact;

const InputsContainer = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  grid-column: 2/3;
  @media screen and (max-width: 1100px) {
    grid-column: 1/2;
    grid-row: 1;
  }
  @media screen and (max-width: 600px) {
    ${InputsContainer} {
      width: 85%;
    }
  }
`;

const ContactContainer = styled.div`
  background-color: white;
  padding: 70px 50px;
  min-height: 400px;
  position: relative;
  text-align: center;
  @media screen and (max-width: 1100px) {
    padding: 70px 0px;
    padding-bottom: 0px;
  }
`;

const Grid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const MapContainer = styled.div`
  grid-column: 1/2;
  padding-top: 30px;

  a {
    color: black;
    display: block;
    padding: 5px;
    font-size: 0.8rem;
    &:hover {
      color: #302939;
    }
  }
  @media screen and (max-width: 1100px) {
    grid-column: 1/2;
    grid-row: 2;

    iframe {
      width: 100%;
      height: 200px;
      vertical-align: bottom;
    }
  }
`;

const SubTitle = styled.div`
  padding: 15px 0px;
  width: 70%;
  margin: 0 auto;
  color: black;
`;
