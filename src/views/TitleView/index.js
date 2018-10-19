import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import title2 from './assets/title1.jpg';

class TitleView extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(<div>
            <MainImg/>
        </div>);
    }
};

export default TitleView;


const MainImg = styled.img.attrs({
    src: `${title2}`
})`
width:100%;
`;