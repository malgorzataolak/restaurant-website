import React, { Component, Fragment } from "react";
import styled from "styled-components";

const BackgroundText = props => <TextBackground>{props.text}</TextBackground>;

export default BackgroundText;

const TextBackground = styled.div`
  color: #302939;
  font-weight: 700;
  font-size: 6rem;
  opacity: 0.09;
  z-index: 0;
  position: absolute;
  top: ${props => (props.top ? props.top + "px" : "0px")};
  left: ${props => (props.left ? props.left + "%" : "0px")};
  transform-origin: 100% 0%;
  cursor: none;
  transform: translate(-100%, 0%) rotate(-90deg) !important;
  &:hover {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
`;
