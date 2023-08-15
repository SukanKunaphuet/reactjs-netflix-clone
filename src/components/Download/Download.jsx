import React from "react";

import mobileImg from '../../assets/mobile.jpg'
import boxshotImg from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

import { DownloadCon } from './Styled'

function Download() {
    return (
        <DownloadCon>
            <div style={{position: 'relative', width: '100%'}}>
                <img width='100%' src={mobileImg}></img>
                <div style={{position: 'absolute', border: '2px solid rgba(128,128,128,0.7)', 
                                borderRadius: '10px', background: '#000', display: 'flex', 
                                padding: '5.6px 12px', width: '60%', height: '110px', padding: '5.6px 12px', 
                                minWidth: '15rem', left: '50%', bottom: '8%', 
                                transform: 'translate(-50%)', justifyContent: 'space-between'}}>
                    <img src={boxshotImg}></img>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '-60px'}}>
                        <p>
                            Stranger Things <br/>
                            <span style={{color: '#0071eb', fontSize: '0.875rem'}}>Downloading...</span>
                        </p>
                    </div>
                    <img src={downloadIcon}></img>
                </div>
            </div>
            <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                <div>
                    <h2 style={{fontSize: '2rem'}}>Download your shows to watch offline</h2>
                    <p style={{fontSize: '1.125rem', margin: '1rem 0 0'}}>
                        Save your favorites easily and always have <br />
                        something to watch.
                    </p>
                </div>
            </div>
        </DownloadCon>
    )
}

export default Download