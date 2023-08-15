import React from "react";
import tvImg from "../../assets/tv.png";
import { EnjoyCon } from "./Styled";

function Enjoy() {
    return (
        <EnjoyCon>
            <div style={{display:'flex', alignItems: 'center', width: '100%'}}>
                <div>
                    <h2 style={{fontSize: '2rem'}}>Enjoy on your TV</h2>
                    <p style={{fontSize: '1.125rem', margin: '1rem 0 0'}}>
                        Watch on Smart TVs, Playstation, Xbox, <br/>
                        Chromecast, Apple TV, Blu-ray players, and <br/>
                        more.
                    </p>
                </div>
            </div>
            <div style={{position: 'relative', width: '100%'}}>
                <img style={{position: 'relative', zIndex: '1', width: '100%'}} src={tvImg} alt=""></img>
                <video style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -54%)', width: '73%'}} autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                </video>
            </div>
        </EnjoyCon>
    )
}

export default Enjoy