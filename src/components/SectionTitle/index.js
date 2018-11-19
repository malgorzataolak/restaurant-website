import React, { Component, Fragment } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
const SectionTitle = props => (
  <div data-aos="fade-up">
    <Title color={props.color}>{props.text}</Title>
  </div>
);

export default SectionTitle;

const Title = styled.div`
  font-size: 2rem;
  color: ${props => (props.color ? props.color : "#404044")};
  font-weight: 700;
`;
