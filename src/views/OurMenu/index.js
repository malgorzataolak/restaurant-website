import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import bg from "./assets/bg.jpg";
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
      <MenuSectionContainer backgroundImage={bg}>
        <SectionTitle text={"Our Menu"} color={"white"} />
        <BackgroundText text={"Menu"} color={"white"} />
        <MenuContainer>
          <MenuNav>
            <li data-aos="fade-up" data-aos-duration="1940">
              <h1 onClick={() => this.changeTab("starters")}>Starters</h1>
            </li>
            <li data-aos="fade-up" data-aos-duration="2000">
              <h1 onClick={() => this.changeTab("main")}>Main Dishes</h1>
            </li>
            <li data-aos="fade-up" data-aos-duration="1700">
              <h1 onClick={() => this.changeTab("desserts")}>Desserts</h1>
            </li>
            <li data-aos="fade-up" data-aos-duration="1900">
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
const DishesContainer = styled.div`
  color: white;
`;

const MenuNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    padding: 10px;
    h1 {
      color: antiquewhite;
      text-transform: uppercase;
      font-size: 1.3rem;
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
        background: rgba(255, 255, 255, 0.6);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover {
        color: white;
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
  margin-top: 70px;
  padding-top: 70px;
  min-height: 700px;
  text-align: center;
  position: relative;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: auto;
`;
