import React, { Component, Fragment } from "react";
import TitleView from "./views/TitleView";
import NavigationBar from "./views/NavigationBar";
import InfoBar from "./views/InfoBar";
import WelcomePage from "./views/WelcomePage";
import Specialities from "./views/Specialities";
import OurMenu from "./views/OurMenu";
import Reservations from "./views/Reservations";
import Contact from "./views/Contact";
import styled from "styled-components";
import "./App.css";
import AOS from "aos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      mainViewMounted: false
    };
    this.mountedMain = this.mountedMain.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true }, () => {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 90
      });
    });
    console.log("main mounted");
  }
  componentDidUpdate() {
    console.log("main updated");
    AOS.refresh();
  }

  mountedMain() {
    console.log("viewMounted");
    setTimeout(
      function() {
        this.setState({ mainViewMounted: true });
      }.bind(this),
      2
    );
  }
  render() {
    console.log("Render APP");
    if (!this.state.mounted) return null;
    return (
      <AppContainer>
        <NavigationBar />
        <TitleView viewMounted={this.mountedMain} />
        <InfoBar />
        {this.state.mainViewMounted && (
          <Fragment>
            {" "}
            <WelcomePage />
            <Specialities />
            <OurMenu />
            <Reservations />
          </Fragment>
        )}
        <Contact />
        <Footer>
          <a href={""}>Back to the top</a>© Copyright ©2018 All rights reserved{" "}
        </Footer>
      </AppContainer>
    );
  }
}

export default App;

const Footer = styled.footer`
  background: #282c34;
  text-align: center;
  justify-content: center;
  font-size: 0.9rem;
  padding: 15px;
  color: white;
  a {
    display: block;
    width: 120px;
    margin: 0 auto;

    padding: 5px;
    color: antiquewhite;
    &:hover {
      color: gold;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Montserrat", sans-serif;
  p {
    font-family: "Raleway", sans-serif;
  }

  a {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
    text-decoration: none;
  }
`;
