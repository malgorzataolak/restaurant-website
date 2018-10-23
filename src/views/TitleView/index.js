import React, { Component, Fragment } from "react";
import styled from "styled-components";
import mainbig from "./assets/mainbig.jpg";
import main600 from "./assets/main600.jpg";
import main900 from "./assets/main900.jpg";
import main1100 from "./assets/main1100.jpg";
import main1700 from "./assets/main1700.jpg";
import sushi1 from "./assets/Sushi1.png";
import sushi2 from "./assets/Sushi2.png";
import sushi3 from "./assets/Sushi3.png";

class TitleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [sushi1, sushi2, sushi3],
      currentIndex: 0,
      translateValue: 0
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.previousPicture = this.previousPicture.bind(this);
    this.getCurrentWidth = this.getCurrentWidth.bind(this);
  }

  nextPicture() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.getCurrentWidth()
    }));
  }

  previousPicture() {
    if (this.state.currentIndex === 0) {
      return this.setState(prevState => ({
        currentIndex: this.state.images.length - 1,
        translateValue: prevState.translateValue + this.getCurrentWidth()
      }));
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.getCurrentWidth()
    }));
  }

  getCurrentWidth() {
    console.log("width", document.getElementById("slider").clientWidth);
    return document.getElementById("slider").clientWidth;
  }
  render() {
    console.log("currentState", this.state);
    return (
      <Container>
        <ArrowLeft onClick={this.previousPicture} />

        <Slider
          id={"slider"}
          image={this.state.images[this.state.currentIndex]}
          value={this.state.translateValue}
        />

        <ArrowRight onClick={this.nextPicture} />
      </Container>
    );
  }
}

export default TitleView;
const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.value ? `translateX(${props.value}px)` : undefined};
  transition: transform ease-out 0.45s;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
`;

const Slider = styled.img.attrs({
  src: props => props.image
})`
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.value
      ? `
translateX($
{
    props.value
}
px)`
      : undefined};
  transition: transform ease-out 0.9s;
`;

const MainImg = styled.img.attrs({
  src: `${mainbig}`,
  srcSet: `${sushi1} 1600w, ${main1100} 1000w, ${main900} 800w, ${main600} 600w`
})`
  height: auto;
`;

const ArrowRight = styled.div`
  opacity: 0.5;
  position: absolute;
  z-index: 100;
  top: 50%;
  right: 1rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 0 25px 30px;
  border-color: transparent transparent transparent #ffffff;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const ArrowLeft = styled.div`
  opacity: 0.5;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 1rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 30px 25px 0;
  border-color: transparent #ffffff transparent transparent;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
