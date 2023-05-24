import React, {Component} from "react";
import styled from 'styled-components';
import { Container,Icons ,Wrap as LogoName,NavBar as StyledNavBar, Btn} from "./style";

const NavLink = styled.h2`
margin: 64px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: ${props => props.active ? 'blue' : 'white'};
`;
const NavName = styled.h1`
        font-size: 18px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
`


export default class Houzing extends Component{
  render() {
    return(
      <Container>
        <Icons>
          <LogoName>
            <Icons.Logo />
            <NavName>Houzing</NavName>
          </LogoName>
          <StyledNavBar>
            <NavLink active={true}>Home</NavLink>
            <NavLink active={false}>Properties</NavLink>
            <NavLink active={false}>Contact</NavLink>
          </StyledNavBar>
          <LogoName>
            <Btn>Login</Btn>
          </LogoName>
        </Icons>
      </Container>
    )
  }
}
