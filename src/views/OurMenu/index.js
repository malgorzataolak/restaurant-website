import React, { Component, Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import BackgroundText from "../../components/BackgroundText";
import "aos/dist/aos.css";

class OurMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MenuSectionContainer>
        <SectionTitle text={"Our Menu"} />
        <BackgroundText text={"Menu"} />
      </MenuSectionContainer>
    );
  }
}

export default OurMenu;

const MenuSectionContainer = styled.div`
  height: 500px;
  position: relative;
`;
