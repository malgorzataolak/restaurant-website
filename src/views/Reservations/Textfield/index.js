import React, { Component, Fragment } from "react";
import styled from "styled-components";

class Textfield extends Component {
  constructor(props) {
    super(props);

    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onFocusHandler() {}

  onBlurHandler() {}

  onChangeHandler() {}

  render() {
    return (
      <TextfieldContainer>
        <Input
          type={this.props.type ? this.props.type : "number"}
          name={this.props.name}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onChange={this.onChangeHandler}
          maxLength="40"
        />
        <Bar />
        <Label>{this.props.inputName}</Label>
      </TextfieldContainer>
    );
  }
}

export default Textfield;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
`;

const Bar = styled.div`
  position: relative;
  display: block;
  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #282c34;
    transition: all 0.2s ease !important;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  &:focus {
    outline: none;
    border-color: transparent;
  }
  &:focus ~ ${Bar}:before, &:focus ~ ${Bar}:after {
    width: 50%;
  }
  border-bottom: 1px solid black;
`;

const TextfieldContainer = styled.div`
  width: auto;
`;
