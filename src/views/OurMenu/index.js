import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import "aos/dist/aos.css";

class OurMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "main"
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(section) {
    this.setState({ current: section });
  }
  render() {
    return (
      <MenuSectionContainer>
        <SectionTitle text={"Our Menu"} />
        <BackgroundText text={"Menu"} />
        <MenuContainer>
          <MenuNav>
            <li>
              <h1 onClick={() => this.changeTab("main")}>Main Dishes</h1>
            </li>
            <li>
              <h1 onClick={() => this.changeTab("desserts")}>Desserts</h1>
            </li>
            <li>
              <h1 onClick={() => this.changeTab("drinks")}>Drinks</h1>
            </li>
          </MenuNav>
          <DishesContainer>
            {this.state.current === "main" && <div>Main</div>}
            {this.state.current === "desserts" && <div>Desserts</div>}
            {this.state.current === "drinks" && <div>Drinks</div>}
          </DishesContainer>
        </MenuContainer>
      </MenuSectionContainer>
    );
  }
}

export default OurMenu;
const DishesContainer = styled.div``;

const MenuNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    padding: 15px;
    h1 {
      color: #a8980d;
      text-transform: uppercase;
      font-size: 1.4rem;
      cursor: pointer;
      position: relative;
      letter-spacing: 0.05rem;
      text-decoration: none;
      &:after {
        bottom: 0;
        content: "";
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover {
        color: #968e3c;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }
    }
  }
`;

const MenuContainer = styled.div``;

const MenuSectionContainer = styled.div`
  margin-top: 50px;
  min-height: 500px;
  text-align: center
  position: relative;
  
`;
