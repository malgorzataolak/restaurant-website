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
`;
