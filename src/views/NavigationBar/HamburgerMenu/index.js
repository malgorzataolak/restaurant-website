import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import menuicon from "../assets/menubar.png";

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };

    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {
    let isOpen = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !isOpen });
  }

  render() {
    return (
      <HamburgerContainer>
        {" "}
        <MenuIcon icon={menuicon} onClick={this.handleMenu} />
        <DropdownMenu pose={this.state.isMenuOpen ? "open" : "close"}>
          <ul>
            <li>
              <a href={"/"}>Specialities</a>
            </li>
            <li>
              <a href={"/"}>Menu</a>
            </li>
            <li>
              {" "}
              <a href={"/"}>Reservation</a>
            </li>
            <li>
              <a href={"/"}>Contact</a>
            </li>
          </ul>
        </DropdownMenu>
      </HamburgerContainer>
    );
  }
}

export default HamburgerMenu;

const DropdownMenu = styled(
  posed.nav({
    open: {
      opacity: 1,
      originY: 0,
      scaleY: 1
    },
    close: {
      opacity: 0,
      scaleY: 0
    }
  })
)`
  display: "block";
  position: absolute;
  top: 60px;
  width: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);
  ul {
    padding: 0px;
    margin: 0px;
  }
  li {
    list-style: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 14px;
    color: #666;
    padding: 15px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
      transition: background-color 1000ms linear;
    }

    a {
      text-decoration: none;
      font-size: 14px;
      color: white;
      text-transform: uppercase;
    }
  }
`;

const MenuIcon = styled.img.attrs({
  src: props => props.icon
})`
  height: 60px;
  filter: invert(100%);
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const HamburgerContainer = styled.div`
  position: relative;
`;
