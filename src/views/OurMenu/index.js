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
import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.jpg";
import d3 from "./assets/d3.jpg";
import d4 from "./assets/d4.jpg";
import d5 from "./assets/d5.jpg";
import d6 from "./assets/d6.jpg";
import d7 from "./assets/d7.jpg";
import d8 from "./assets/d8.jpg";
import d9 from "./assets/d9.jpg";
import de1 from "./assets/de1.jpg";
import de2 from "./assets/de2.jpg";
import de3 from "./assets/de3.jpg";
import de4 from "./assets/de4.jpg";
import de5 from "./assets/de5.jpg";
import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";

import "aos/dist/aos.css";

const MenuItem = ({ data }) => {
  return (
    <MenuItemContainer
      key={data.header}
      data-aos="fade-up"
      data-aos-duration="1940"
    >
      <img src={data.image} />
      <MenuItemText>
        <MenuItemTitle>{data.header}</MenuItemTitle>
        <MenuItemPrice>${data.price.toFixed(2)}</MenuItemPrice>
        <MenuItemSubtitle>{data.description}</MenuItemSubtitle>
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
            "prawn in tempura, surimi, cucumber, wasabi dep, golden caviar",
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
          description: "chili, omlette, daikon radish, cucumber, creamy cheese",
          price: 22,
          image: s6
        }
      ],
      main: [
        {
          header: "Salmon Futomaki",
          description:
            "baked salmon teriyaki, creamy cheese, chili, lettuce, cucumber, sriracha sauce",
          price: 42.45,
          image: d1
        },
        {
          header: "Zander in tempura",
          description:
            "creamy cheese, lettuce, seeds, gourd, shitake mushrooms, plum sauce, thread chilli",
          price: 60,
          image: d2
        },
        {
          header: "Nigri salmon teriyaki",
          description: "nigiri with salmon , with teriyaki and prawn",
          price: 30,
          image: d3
        },
        {
          header: "Nigri salmon",
          description: "nigiri with salmon , with prawn",
          price: 28,
          image: d4
        },
        {
          header: "Sushi Set 26 pieces",
          description:
            "futomaki: zander in tempura and avocado, baked salmon teriyaki, uramaki prawn with mango sauce, hosomaki with surimi, nigiri with salmon",
          price: 92.5,
          image: d5
        },
        {
          header: "Pad thai",
          description:
            "soaked dried rice noodles, which are stir-fried with eggs and chopped firm tofu, and is flavored with tamarind pulp",
          price: 28,
          image: d6
        },
        {
          header: "Tamago",
          description: "a ball of rice covered by a slice of omlette",
          price: 32.45,
          image: d7
        },
        {
          header: "Sushi Set 40 pieces",
          description:
            "futomaki: baked salmon teriyaki, salmon and avocado, prawn in tempura, uramaki: tuna in tempura, Tomka with baked salmon teriyaki, hosomaki with salmon, nigiri: with salmon , with prawn",
          price: 120.5,
          image: d8
        },
        {
          header: "Extra Ramen",
          description:
            "slightly thin, curly noodles served in a soy-flavored chicken broth with chopped scallion, menma, sliced pork, kamaboko, egg, nori, and spinach",
          price: 35,
          image: d9
        }
      ],
      desserts: [
        {
          header: "Strawberry muffins",
          description: "with a lightly spiced batter and fresh strawberries",
          price: 5.4,
          image: de1
        },
        {
          header: "Apple Pie",
          description:
            "combines the sweet and tender flavors of baked apples with a buttery and flaky pie crust",
          price: 8,
          image: de2
        },
        {
          header: "Spinach Pie",
          description: "spinach in a sweet, lemon pie",
          price: 7,
          image: de3
        },
        {
          header: "French Macaroon",
          description:
            "a small biscuit, made from ground almonds coconut, and other nuts, with sugar and flavorings",
          price: 2,
          image: de4
        },
        {
          header: "Chocolate brownie",
          description: " a square, baked, chocolate dessert",
          price: 5,
          image: de5
        }
      ],
      drinks: [
        {
          header: "Herbal Tea",
          description:
            "an beverage made from the infusion or decoction of herbs, spices, or other plant material in hot water",
          price: 5,
          image: c1
        },
        {
          header: "Tea",
          description:
            "an aromatic beverage commonly prepared by pouring hot or boiling water over cured leaves of the Camellia sinensis",
          price: 4,
          image: c2
        },
        {
          header: "Latte",
          description: "a coffee drink made with espresso and steamed milk",
          price: 7,
          image: c3
        }
      ]
    };
    this.mounted = true;
    this.setState({ items: items });
  }

  changeTab(section) {
    this.setState({ current: section });
  }
  render() {
    let navs = {
      starters: "Starters",
      main: "Main dishes",
      desserts: "Desserts",
      drinks: "Drinks"
    };
    if (!this.mounted) return null;
    return (
      <MenuSectionContainer backgroundImage={bg}>
        <SectionTitle text={"Our Menu"} color={"white"} />
        <BackgroundText text={"Menu"} color={"white"} />
        <MenuContainer>
          <MenuNav>
            {Object.entries(navs).map(([key, value]) => {
              let active = false;
              if (key == this.state.current) {
                console.log("hello true", key, this.state.current);
                active = true;
              }
              return (
                <li key={key} data-aos="fade-up" data-aos-duration="1940">
                  <NavItem active={active} onClick={() => this.changeTab(key)}>
                    {value}
                  </NavItem>
                </li>
              );
            })}
          </MenuNav>
          <DishesContainer>
            {Object.entries(this.state.items[this.state.current]).map(
              ([k, v]) => (
                <MenuItem key={k} data={v} />
              )
            )}
          </DishesContainer>
        </MenuContainer>
      </MenuSectionContainer>
    );
  }
}

export default OurMenu;

const MenuItemSubtitle = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const MenuItemText = styled.div`
  text-align: left;
  align-content: center;
  display: grid;
  margin: 0px 20px;
  grid-template-columns: 20rem 5rem;
  grid-template-rows: 30px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 12rem 3rem;
    grid-template-rows: auto;
    margin-right: 0px;
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: 8rem 3rem;

    ${MenuItemSubtitle} {
      font-size: 0.7rem;
    }
  }
`;

const MenuItemPrice = styled.span`
  font-size: 1.2rem;
  color: antiquewhite;
`;

const MenuItemTitle = styled.h3`
  margin: 0px;
  letter-spacing: 0.05rem;
  color: antiquewhite;
`;

const MenuItemContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  img {
    border-radius: 50%;
    align-self: center;
  }
`;

const DishesContainer = styled.div`
  color: white;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 70px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
`;

const NavItem = styled.h1`
  color: ${props => (props.active ? "white" : "antiquewhite")};
  margin: 0;
  line-height: 40px;
  vertical-align: middle;
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

  ${({ active }) =>
    active &&
    `
  border-bottom:1px solid white;
  `};
  &:hover {
    color: white;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const MenuNav = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: 0px;

  li {
    padding: 0px 10px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 13rem;
    margin: 0 auto;
    margin-top: 15px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const MenuSectionContainer = styled.div`
  margin-top: 70px;
  padding-top: 70px;
  min-height: 600px;
  text-align: center;
  position: relative;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
