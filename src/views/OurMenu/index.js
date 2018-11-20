import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import bg from "./assets/bg.jpg";
import s1 from "./assets/s1.jpg";
import s2 from "./assets/s2.jpg";
import s3 from "./assets/s3.jpg";
import s4 from "./assets/s4.jpg";
import s5 from "./assets/s5.jpg";
import s6 from "./assets/s6.jpg";
import "aos/dist/aos.css";

const MenuItem = props => {
  console.log("props", props);
  return (
    <MenuItemContainer>
      <img src={props.data.image} />
      <MenuItemText>
        <MenuItemTitle>{props.data.header}</MenuItemTitle>
        <MenuItemSubtitle>{props.data.description}</MenuItemSubtitle>
        <MenuItemPrice>{props.data.price}</MenuItemPrice>
      </MenuItemText>
    </MenuItemContainer>
  );
};

class OurMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "starters",
      items: null
    };
    this.mounted = false;
    this.changeTab = this.changeTab.bind(this);
  }

  componentDidMount() {
    let items = {
      starters: [
        {
          header: "Baozi",
          description: "kimchi salad, ponzu citrus sauce",
          price: 19.2,
          image: s1
        },
        {
          header: "Magic snack",
          description:
            "prawn in tempura, surimi, cucumber, wasabi dep, golden caviar,",
          price: 15.7,
          image: s2
        },
        {
          header: "Dim Sum",
          description: "duck in hoisin sauce, cucumber, lettuce, sesame",
          price: 12.45,
          image: s3
        },
        {
          header: "Tang Hoon Soup",
          description: "light-tasting and healthy Chinese-style one-dish meal ",
          price: 25,
          image: s4
        },
        {
          header: "Curry Ramen",
          description:
            "soup is mainly made with pork bones and vegetables and is seasoned with curry",
          price: 32.45,
          image: s5
        },
        {
          header: "Salmon in tempura",
          description: "hili, omlette, daikon radish, cucumber, creamy cheese",
          price: 22,
          image: s6
        }
      ],
      main: [],
      desserts: [],
      drinks: []
    };
    this.mounted = true;
    this.setState({ items: items });
  }

  changeTab(section) {
    this.setState({ current: section });
  }
  render() {
    console.log("starters", this.state.items);
    if (!this.mounted) return null;
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
            {this.state.current === "starters" && (
              <div>
                {Object.entries(this.state.items["starters"]).map(([k, v]) => (
                  <MenuItem data={v} />
                ))}
              </div>
            )}
            {this.state.current === "main" && <div />}
            {this.state.current === "desserts" && <div>Desserts</div>}
            {this.state.current === "drinks" && <div>Drinks</div>}
          </DishesContainer>
        </MenuContainer>
      </MenuSectionContainer>
    );
  }
}

export default OurMenu;
const MenuItemText = styled.div`
  text-align: left;
`;

const MenuItemPrice = styled.span``;

const MenuItemSubtitle = styled.span``;

const MenuItemTitle = styled.h3``;

const MenuItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  img {
    border-radius: 50%;
  }
`;

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
