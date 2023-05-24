import React, { Component } from 'react';
import {Container,ImageContainer} from "./style";
import ImagesItems from "./images.js";
export default class App extends Component {
    render() {
        return (
            <Container>
                <ImageContainer>
                <ImagesItems/>
                </ImageContainer>
            </Container>

        )
    }
}
