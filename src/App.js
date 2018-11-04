import React, { Component } from "react";
import TitleView from "./views/TitleView";
import NavigationBar from "./views/NavigationBar";
import styled from "styled-components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavigationBar />
        <TitleView />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
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
