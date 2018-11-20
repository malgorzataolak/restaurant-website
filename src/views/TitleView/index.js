import React, { Component, Fragment } from "react";
import styled from "styled-components";
import sushi1 from "./assets/Sushi1.png";
import sushi1_1100 from "./assets/Sushi1_1100.png";
import sushi2 from "./assets/Sushi2.png";
import sushi2_1100 from "./assets/Sushi2_1100.png";
import sushi3 from "./assets/Sushi3.png";
import sushi3_1100 from "./assets/Sushi3_1100.png";
import phone from "./assets/phone.png";
import facebook from "./assets/Facebook.png";
import snapchat from "./assets/Snapchat.png";
import instagram from "./assets/Instagram.png";
import youtube from "./assets/YouTube.png";

class TitleView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        { big: sushi1, xl: sushi1_1100 },
        { big: sushi2, xl: sushi2_1100 },
        { big: sushi3, xl: sushi3_1100 }
      ],
      texts: [
        {
          main: "Lorem Ipsum",
          sub: "dolor sit amet, consectetur adipiscing elit"
        },
        {
          main: "Ut enim ad minim veniam",
          sub: "quis nostrud exercitation ullamco "
        },
        { main: "Excepteur sint occaecat", sub: "cupidatat non proident" }
      ],
      currentIndex: 0,
      translateValue: 0,
      leftVisible: false
    };
    this.interval = null;
    this.nextPicture = this.nextPicture.bind(this);
    this.previousPicture = this.previousPicture.bind(this);
    this.getCurrentWidth = this.getCurrentWidth.bind(this);
  }

  componentDidMount() {
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(this.nextPicture, 3500);
    this.props.viewMounted();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextPicture() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        leftVisible: false
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.getCurrentWidth(),
      leftVisible: true
    }));
  }

  previousPicture() {
    if (this.state.currentIndex === 0) {
      return;
    }
    if (this.state.currentIndex === 1) {
      this.setState({ leftVisible: false });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.getCurrentWidth()
    }));
  }

  getCurrentWidth() {
    //console.log("width", document.getElementById("slider").clientWidth);
    return document.getElementById("slider").clientWidth;
  }
  render() {
    // console.log("currentState", this.state);
    return (
      <Container>
        <ArrowLeft
          leftArrow={this.state.leftVisible}
          onClick={this.previousPicture}
        />
        <SliderWrapper value={this.state.translateValue}>
          {this.state.images.map((image, i) => (
            <Fragment key={i + "slider"}>
              <picture>
                <source
                  media="(max-width: 1000px)"
                  srcSet={this.state.images[this.state.currentIndex].xl}
                />
                <Slider
                  key={i}
                  id={"slider"}
                  image={this.state.images[this.state.currentIndex]}
                  value={this.state.translateValue}
                />
              </picture>
            </Fragment>
          ))}
        </SliderWrapper>
        <TextContainer>
          <TextWrapper
            textMain={this.state.texts[this.state.currentIndex].main}
            textSub={this.state.texts[this.state.currentIndex].sub}
          />
        </TextContainer>
        <ReserveButton href="tel:48000000000">
          <PhoneIcon src={phone} />
          Reserve Table
          <p>+48 000 000 000</p>
        </ReserveButton>
        <ArrowRight onClick={this.nextPicture} />
        <SocialMediaPanel />
      </Container>
    );
  }
}

export default TitleView;

const SocialMediaPanel = () => (
  <SocialMediaContainer>
    <a href="http://facebook.com">
      {" "}
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="http://instagram.com">
      {" "}
      <img src={instagram} alt="Instagram" />
    </a>
    <a href="http://youtube.com">
      {" "}
      <img src={youtube} alt="YouTube" />
    </a>
    <a href="http://snapchat.com">
      {" "}
      <img src={snapchat} alt="Snapchat" />
    </a>
  </SocialMediaContainer>
);

const SocialMediaContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  img {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin: 5px;
    cursor: pointer;
    &:hover {
      filter: invert(100%);
      transition: filter 500ms ease-in;
      opacity: 0.9;
    }
  }
`;

const PhoneIcon = styled.img`
  filter: invert(100%);
  margin-top: 2px;
  margin-right: 5px;
  width: 30px;
  float: left;
`;

const ReserveButton = styled.a`
  //left: 50%;
  right: 100px;
  text-align: center;
  // transform: translate(-50%, -50%);
  position: absolute;
  font-size: 14px;
  //bottom:20px;
  top: 100px;

  text-align: center;
  background: rgb(0, 0, 0, 0.3);
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border: 2px solid white;
  box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.75);
  color: white;
  text-transform: uppercase;
  padding: 16px 25px;
  padding-left: 20px;
  p {
    margin: 2px;
    font-weight: 400;
    font-size: 12px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transition: background-color 1000ms linear;
  }

  @media screen and (max-width: 1100px) {
    top: 70px;
    right: 20px;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.42);
  color: white;
  opacity: 0.9;
  h1 {
    font-size: calc(20px + 10 * ((100vw - 320px) / 680));
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    margin: 0;
  }
  h2 {
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    font-weight: 300;
    font-style: italic;
  }
`;

const TextWrapper = ({ textMain, textSub }) => (
  <Fragment>
    <h1>{textMain}</h1>
    <h2>{textSub}</h2>
  </Fragment>
);

const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  img {
    width: 100%;
    vertical-align: bottom; //empty line under image fix
  }
  width: 100%;
  transform: ${props =>
    props.value ? `translateX(${props.value}px)` : undefined};
  transition: transform ease-out 0.45s;
`;

const Slider = styled.img.attrs({
  src: props => props.image.big
  /*srcSet: props =>
    props.image
      ? `${props.image.big} 1600w, ${props.image.xl} 1100w `
      : "undefined" */
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
