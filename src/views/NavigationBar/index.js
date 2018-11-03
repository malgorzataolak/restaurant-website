import React, { Component, Fragment } from "react";
import styled from "styled-components";
import menuicon from "./assets/menubar.png";
import logoicon from "./assets/logo.svg";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <MenuIcon icon={menuicon} />
        <LogoCenter>
          <Logo />
        </LogoCenter>
        <MenuRight>
          <MenuShort />
        </MenuRight>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;

const MenuShort = () => (
  <nav>
    <a href={"/"}>Specialities</a>
    <a href={"/"}>Menu</a>
    <a href={"/"}>Reservation</a>
    <a href={"/"}>Contact</a>
  </nav>
);

const Logo = () => (
  <LogoContainer>
    <LogoIcon icon={logoicon} />
    <h1>Sushi Logo</h1>
  </LogoContainer>
);

const MenuRight = styled.div`
  position: absolute;
  right: 10px;
  top: 0px;
  margin-top: 20px;
  a {
    letter-spacing: 0.05rem;
    font-size: 17px;
    padding: 15px;
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const LogoCenter = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1100px) {
    margin-left: 1%;
    justify-content: left;
  }
`;

const LogoIcon = styled.img.attrs({
  src: props => props.icon
})`
  filter: invert(100%);
  height: 30px;
  margin-top: 15px;
  margin-right: 15px;
`;

const LogoContainer = styled.div`
  display: flex;
  line-height: 60px;
  h1 {
    margin: 0;
    color: white;
    font-size: 25px;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
  }
`;

const NavigationContainer = styled.div`
  position: absolute;
  z-index: 102;
  display: flex;
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  @media screen and (min-width: 1100px) {
    width: 80%;
    margin: 0 10%;
  }
`;

const MenuIcon = styled.img.attrs({
  src: props => props.icon
})`
  height: 60px;
  position: absolute;
  filter: invert(100%);
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
