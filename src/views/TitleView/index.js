import React, { Component, Fragment } from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "react-pose";
import sushi1 from "./assets/Sushi1.png";
import sushi1_1100 from "./assets/Sushi1_1100.png";
import sushi2 from "./assets/Sushi2.png";
import sushi2_1100 from "./assets/Sushi2_1100.png";
import sushi3 from "./assets/Sushi3.png";
import sushi3_1100 from "./assets/Sushi3_1100.png";

class TitleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { big: sushi1, xl: sushi1_1100 },
        { big: sushi2, xl: sushi2_1100 },
        { big: sushi3, xl: sushi3_1100 }
      ],
      currentIndex: 0,
      translateValue: 0,
      leftVisible: false
    };
    this.nextPicture = this.nextPicture.bind(this);
    this.previousPicture = this.previousPicture.bind(this);
    this.getCurrentWidth = this.getCurrentWidth.bind(this);
  }

  nextPicture() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState(prevState => ({
        currentIndex: 0,
        translateValue: 0,
        leftVisible: false
      }));
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.getCurrentWidth(),
      leftVisible: true
    }));
  }

  previousPicture() {
    if (this.state.currentIndex === 0) {
      /* return this.setState(prevState => ({
        currentIndex: this.state.images.length - 1,
        translateValue: 0
      })); */
      return;
    }
    if (this.state.currentIndex == 1) {
      this.setState({ leftVisible: false });
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
        <ArrowLeft
          leftArrow={this.state.leftVisible}
          onClick={this.previousPicture}
        />
        <SliderWrapper value={this.state.translateValue}>
          {this.state.images.map((image, i) => (
            <Slider
              key={i}
              id={"slider"}
              image={this.state.images[this.state.currentIndex]}
              value={this.state.translateValue}
            />
          ))}
        </SliderWrapper>

        <ArrowRight onClick={this.nextPicture} />
      </Container>
    );
  }
}

export default TitleView;
const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform: ${props =>
    props.value ? `translateX(${props.value}px)` : undefined};
  transition: transform ease-out 0.45s;
`;

const Slider = styled.img.attrs({
  //src: props => props.image.big,
  srcSet: props =>
    props.image
      ? `${props.image.big} 1600w, ${props.image.xl} 1100w `
      : "undefined"
})`
  height: 100%;
  width: 100%;
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
  transform: translate(-50%, -50%);
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
  transform: translate(50%, -50%);

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  ${({ leftArrow }) =>
    !leftArrow &&
    `

    display:none;
    `};
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

  @media screen and (max-width: 1100px) {
    ${ArrowLeft} {
      border-width: 15px 20px 15px 0;
    }

    ${ArrowRight} {
      border-width: 15px 0 15px 20px;
    }
  }
`;
