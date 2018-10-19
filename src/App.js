import React, { Component } from 'react';
import TitleView from './views/TitleView';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  render() {
    return (
        <AppContainer>
           <TitleView/>
        </AppContainer>
    );
  }
}

export default App;

const AppContainer=styled.div`
width:100%;
height:100%;

`;
