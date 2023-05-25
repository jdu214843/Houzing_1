import React, {Component}from "react";
import {Container,RightSection,LeftSection} from "./style.js";
import Share from "../../assets/icons/ulashish.svg";
import Like from "../../assets/icons/Vectorlike.svg";
export default class Description extends Component {
    render() {
        return (
            <Container>
                <RightSection>
                   <div className="descName">
                    <h1>Luxury Family Loft by Victoria Park</h1>
                    <h4>Quincy St, Brooklyn, NY, USA</h4>
                   </div>
                   <div className="iconName">
                   <img src={Share} alt="icon" />
                        <span>Share</span>
                   <img src={Like} alt="icon" />
                        <span>Save</span>
                   </div>
                       
                </RightSection>
                <LeftSection>

                </LeftSection>
            </Container>
        )
    }
}