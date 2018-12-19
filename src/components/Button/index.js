import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Button = ({ text, onClickHandler }) => (
  <ButtonStyle type="button" onClick={onClickHandler}>
    {text}
  </ButtonStyle>
);

export default Button;

export const ButtonStyle = styled.button`
  --button-border-color: #160e21;
  --button-color: #302939;
  --button-font-color: white;
  min-width: 120px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid var(--button-border-color);
  border-radius: 3px;
  font-size: 13px;
  color: var(--button-font-color);
  text-transform: uppercase;
  letter-spacing: 0.075em;
  text-align: center;
  background-color: var(--button-color);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    --button-color: #423159;
  }
`;
