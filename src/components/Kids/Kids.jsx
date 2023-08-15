import React from "react";

import KidsImg from "../../assets/kids.png"

import {KidsCon} from "./Styled"

function Kids() {
    return (
        <KidsCon>
            <div style={{width: '100%'}}>
                <img width="100%" src={KidsImg} alt="" />
            </div>
            <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                <div>
                    <h2 style={{fontSize: '2rem'}}>Create profiles for kids</h2>
                    <p style={{fontSize: '1.125rem', margin: '1rem 0 0'}}>
                        Send kids on adventures with their favorite <br/>
                        characters in a space made just for them—<br/>
                        free with your membership.
                    </p>
                </div>
            </div>
        </KidsCon>
    )
}

export default Kids