import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
const SectionTitle = props => (
  <div data-aos="fade-up">
    <Title>{props.text}</Title>
  </div>
);

export default SectionTitle;

const Title = styled.div`
  font-size: 2rem;
  color: #404044;
  font-weight: 700;
`;
