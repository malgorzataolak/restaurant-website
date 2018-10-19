import React, { Component, Fragment } from "react";
import styled from "styled-components";
import mainbig from "./assets/mainbig.jpg";
import main600 from "./assets/main600.jpg";
import main900 from "./assets/main900.jpg";
import main1100 from "./assets/main1100.jpg";
import main1700 from "./assets/main1700.jpg";

class TitleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainImg />
      </div>
    );
  }
}

export default TitleView;

const MainImg = styled.img.attrs({
  src: `${mainbig}`,
  srcSet: `${main1700} 1600w, ${main1100} 1000w, ${main900} 800w, ${main600} 600w`
})`
  height: auto;
`;
