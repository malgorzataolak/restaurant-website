import React, { Component, Fragment } from "react";
import styled from "styled-components";
import chief from "./assets/chief.jpg";
import "aos/dist/aos.css";

class WelcomePage extends Component {
  render() {
    return (
      <WelcomeContainer>
        <TextBackground>Welcome</TextBackground>
        <TextBox>
          <div data-aos="fade-up">
            <h1>Welcome!</h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </TextBox>
        <ImageContainer data-aos="fade-up" data-aos-duration="3000">
          <img src={chief} alt={"chief"} />
        </ImageContainer>
      </WelcomeContainer>
    );
  }
}

export default WelcomePage;

const TextBackground = styled.div`
  color: #302939;
  font-weight: 700;
  font-size: 6rem;
  opacity: 0.09;
  z-index: 0;
  position: absolute;
  top: 10px;
  left: 5%;
  transform-origin: 100% 0%;
  cursor: none;
  transform: translate(-100%, 0%) rotate(-90deg) !important;
  &:hover {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
`;

const TextBox = styled.div`
  width: 30%;
  line-height: 2;
  h1 {
    font-size: 2rem;
    color: #404044;
    font-weight: 700;
  }
`;

const ImageContainer = styled.div`
  width: 40%;
  padding: 15px;
  text-align: center;
  img {
    width: 85%;
  }
`;

const WelcomeContainer = styled.div`
  min-height: 400px;
  padding: 15px;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1300px) {
    ${TextBox}, ${ImageContainer} {
      width: 50%;
    }
  }

  @media screen and (max-width: 1096px) {
    flex-direction: column;
    flex-flow: column;

    ${TextBox}, ${ImageContainer} {
      width: 70%;
    }
    img {
      width: 65%;
    }
  }

  @media screen and (max-width: 700px) {
    ${TextBox}, ${ImageContainer} {
      width: 100%;
    }
    img {
      width: 85%;
    }
  }
`;
