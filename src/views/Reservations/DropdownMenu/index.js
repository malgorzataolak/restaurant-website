import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed from "react-pose";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.menuList = React.createRef();
    this.openMenu = this.openMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  openMenu() {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.handleClickOutside, false);
    } else {
      document.removeEventListener("click", this.handleClickOutside, false);
    }
    this.setState({ isOpen: (this.isOpen = !this.isOpen) });
  }

  handleClickOutside(e) {
    if (this.menuList.current) {
      if (this.menuList.current.contains(e.target)) return;
      this.openMenu();
    }
  }

  selectItem(e) {
    this.props.handler(e.target.value, this.props.name);
    setTimeout(this.openMenu, 0);
  }

  render() {
    return (
      <DropdownContainer ref={this.menuList}>
        <CurrentOption onClick={this.openMenu}>
          {this.props.placeholder ? this.props.placeholder : this.props.current}
        </CurrentOption>
        <Bar isMenuOpen={this.state.isOpen} />
        <MenuList pose={this.state.isOpen ? "open" : "close"}>
          {Object.entries(this.props.list).map(([key, value]) => {
            return (
              <MenuItem key={key}>
                <input
                  name={value}
                  type="radio"
                  key={key}
                  id={key + value}
                  value={value}
                  onClick={e => {
                    this.selectItem(e);
                  }}
                />
                <label htmlFor={key + value}>{value}</label>
              </MenuItem>
            );
          })}
        </MenuList>
      </DropdownContainer>
    );
  }
}

export default DropdownMenu;

const MenuItem = styled.div`
  padding: 10px;
  align-items: center;
  background: #302939;
  color: white;
  border: 0.5px solid #51465f;
  margin: 1px 0px;
  cursor: pointer;
  input {
    width: 100%;
    opacity: 0;
    display: none;
    left: -99999px;
  }

  label {
    color: ${props => (props.color ? props.color : "white")};
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    cursor: pointer;
  }

  &:hover {
    background: #150f1d;
    transition: background 0.3s ease-in-out;
  }
`;

const MenuList = styled(
  posed.div({
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
  z-index: 100;
  position: absolute;
  top: 30px;
  height: auto;
  max-height: 250px;
  width: 100%;
  overflow: auto;
`;

const Bar = styled.div`
  position: relative;
  display: block;
  &:before,
  &:after {
    content: "";
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #282c34;
    transition: all 0.2s ease !important;
  }

  &:before {
    left: 50%;
    width: ${props => (props.isMenuOpen ? "50%" : "0")};
  }

  &:after {
    right: 50%;
    width: ${props => (props.isMenuOpen ? "50%" : "0")};
  }
`;

const CurrentOption = styled.div`
  width: 100%;
padding-bottom:8px;
text-align:left;
  border-bottom: 1px solid black;
   font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
  margin:30px 0px;
  
   ${({ isMenuOpen }) =>
     isMenuOpen &&
     `
      color:red;
     ${Bar}:before ~ ${Bar}:after {
    width: 50%;
  `};
   
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;
