import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnBlur: false,
      isFilled: false
    };
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onFocusHandler(e) {
    console.log("on focus");
    let target = e.target;

    this.setState({ isBlured: false, isFilled: true });
  }

  onBlurHandler(e) {
    console.log(e.target.value);
    let isFilled = false;
    if (e.target.value) {
      isFilled = true;
    }
    this.setState({ isBlured: true, isFilled: isFilled });
  }

  onChangeHandler(e) {
    console.log("on change");
  }

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
        <Label textSmall={this.state.isFilled}>{this.props.inputName}</Label>
      </TextfieldContainer>
    );
  }
}

export default Textfield;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
  position: absolute;
  top: 0px;
  width: auto;
  transition: all 0.2s ease;
  pointer-events: none;
  left: 0px;
  ${props =>
    props.textSmall &&
    css`
      top: -20px;
      font-size: 12px;
    `};
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
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  font-size: 1.2rem;
  line-height: 1.6rem;
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
  position: relative;
  margin: 30px 0px;
  width: 100%;
  max-width: 300px;
`;
