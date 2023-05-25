import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 1280px;
height: 100vh;
margin: 0 auto;
margin-top: 24px;

`
export const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 940px;
    margin-right: 10px;
    border:1px solid red;
    .descName{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #0D263B;
        width: 600px;
        border: 1px solid red;
    }
    .descName h4{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color:  #696969;
    }
    .iconName{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        border: 1px solid red;
        width: 320px;
        /* padding: 20px; */
        font-size: 14px;
        line-height: 24px;
        color:  #696969;    
    }
`
export const LeftSection = styled.div`
    display: flex;
    width: 320px;
    margin-left: 10px;
    border:1px solid blue;

`