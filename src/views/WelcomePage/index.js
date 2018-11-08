import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";

const WelcomePage = () => (
  <WelcomeContainer>
    <TextBox>
      <h1>Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </TextBox>
  </WelcomeContainer>
);

export default WelcomePage;

const TextBox = styled.div``;

const WelcomeContainer = styled.div``;
