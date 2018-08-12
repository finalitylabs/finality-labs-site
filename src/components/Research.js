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
                <div className='research-inner'>
                    <h1>Research</h1>
                
                    <p>Advanced Applications on the blockchain will not work without immediate solutions to how these systems will be run in a cost-effective and decentralized way. A core component of Finality Labs is the research and development done into scaling Ethereum and other blockchain ledgers.</p>
                </div>
                </Fade>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                    <div className='pdf-outer' >
                        <div className='pdf-left' >
                            <h4>Payment Channel Hubs</h4>
                            <p>The Set-Payment paper details a hub and spoke model inspired by virtual channels that are built for human activity (i.e. tipping).
                            </p>
                            <a href={setPaymentChannelPDF} rel='noopener noreferrer' target="_blank" style={{background: 'white', color: '#6b5acd', border: 'none', padding: '10px', cursor: 'pointer', textDecoration: 'none'}}>View PDF</a>
                        </div>
                        <div className='pdf-right' >
                            <h4>State Channels and Plasma</h4>
                        
                            <p>The Set-Plasma paper outlines our protocol for arbitrarily complex state systems to be ran over provider nodes.</p>
                            <a href='https://docs.google.com/document/d/15LdH-YL3syBHdHlwCfUHou6XFvg5lXBKtrAFp5bG1Pc' rel='noopener noreferrer' style={{background: 'white', color: '#6b5acd', border: 'none', padding: '10px', cursor: 'pointer', textDecoration: 'none'}}>View PDF</a>
                        </div>
                    </div>
                </Fade>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                </Fade>
                </div>
            </div>
            
        );
    }
}

export default Research;
