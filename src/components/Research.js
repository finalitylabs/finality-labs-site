import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ResearchTop from './ResearchTop';

import * as setPaymentChannelPDF from '../assets/PDF/SetPaymentChannels.pdf';

class Research extends Component {

    render() {
    
        return (
            <div id='Research' className='research-outer'>
                <ResearchTop />
                <div className='research'>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                <div>
                    <h1>Research</h1>
                
                    <p>Advanced Applications on the blockchain will not work without immediate solutions to how these systems will be run in a cost-effective and decentralized way. A core component of Finality Labs is the research and development done into scaling Ethereum and other blockchain ledgers.</p>
                </div>
                </Fade>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <div style={{flex: 1, minWidth: '250px', textAlign: 'right'}}>
                            <h4>Payment Channel Hubs</h4>
                            <p>The Set-Payment paper details a hub and spoke model inspired by virtual channels that are built for human activity (i.e. tipping).
                            </p>
                            <a href={setPaymentChannelPDF} rel='noopener noreferrer' target="_blank" style={{marginRight: '20px', background: 'white', color: '#6b5acd', border: 'none', padding: '10px', cursor: 'pointer', textDecoration: 'none'}}>View PDF</a>
                        </div>
                        <div style={{flex: 1, minWidth: '250px'}}>
                            <h4>General State Channels</h4>
                        
                            <p>The Set-General paper outlines our protocol for arbitrarily complex turn based state systems to be ran over provider nodes.</p>
                            <a href='#' rel='noopener noreferrer' style={{ marginLeft: '20px', background: 'white', color: '#6b5acd', border: 'none', padding: '10px', cursor: 'pointer', textDecoration: 'none'}}>View PDF</a>
                        </div>
                    </div>
                </Fade>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                <div>
                <h4>Plasma</h4>
                
                <p>We are prototyping an RPG that will explore an application-specific plasma chain. This requires non-UTXO based state challenges to allow exits to a parent chain. </p>
                </div>
                </Fade>
                </div>
            </div>
            
        );
    }
}

export default Research;
