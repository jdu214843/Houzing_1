
import Styled from "styled-components";
import {ReactComponent as logo} from "../assets/icons/VectorLogo.svg"

export const Container = Styled.div`
    display: flex;
    color: #fff;
    height: 64px;
    width: 100%;
    background: #0D263B;
`

export const Icons = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    height: 100%;
    margin: 0 auto;

`
Icons.Logo = Styled(logo)`
    width: 24px;
    height: 24px;


`
export const Wrap = Styled.div`
    display: flex;


`
export const NavBar = Styled.div`
    display: flex;


`
export const Btn = Styled.button`
background: #0D263B;
padding: 12px 40px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #fff;
border: 1px solid #fff;
&:hover{
    background-color: gray;
    color: white;
}
`