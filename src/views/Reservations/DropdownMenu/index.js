import React, { Component, Fragment } from "react";
import styled from "styled-components";

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  openMenu() {
    if (!this.state.isOpen) {
      document.addEventListener("click", this.handleClickOutside, false);
    } else {
      document.removeEventListener("click", this.handleClickOutside, false);
    }
    this.setState({ isOpen: (this.isOpen = !this.isOpen) });
  }

  selectItem(e) {}

  render() {
    if (this.currentOption == undefined || this.props.currentOption == null)
      return null;
    return (
      <DropdownContainer>
        <CurrentOption onClick={this.openMenu}>
          {this.props.currentOption}
        </CurrentOption>
        <MenuList>
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

const MenuItem = styled.div``;

const MenuList = styled.div``;

const CurrentOption = styled.div``;

const DropdownContainer = styled.div``;
