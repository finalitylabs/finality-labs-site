import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Research extends Component {
    render() {
        return (
            <div id='Research' className='research'>
                <Fade
                    top
                    duration='500'
                    distance='100px'
                >
                <h1>Research</h1>
                
                <p>Gaming on the blockchain will not work without immediate solutions to how these systems will be run in a cost-effective and decentralized way. A core component of Finality Labs is the research and development done into scaling Ethereum and other blockchain ledgers. Finality Labs is collaborating with SpankChain on their generalized-state-channels implementation to facilitate cheap channel instantiation, state transfers, and channel upgrade paths for both the SpankChain camsite and the CryptoKitties Battle Arena while an RPG in the works will explore an application-specific plasma chain.</p>
                </Fade>
            </div>
        );
    }
}

export default Research;
