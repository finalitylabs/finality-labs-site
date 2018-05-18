import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Tunnel from './Tunnel';

class Research extends Component {
    render() {
        return (
            <div id='Research' className='research'>
                <Tunnel />
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                <div>
                <h1>Research</h1>
                
                <p>Gaming on the blockchain will not work without immediate solutions to how these systems will be run in a cost-effective and decentralized way. A core component of Finality Labs is the research and development done into scaling Ethereum and other blockchain ledgers.</p>
                </div>
                </Fade>
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                <div>
                <h4>General State Channels</h4>
                
                <p>Finality Labs is collaborating with SpankChain on their generalized-state-channels implementation to facilitate cheap channel instantiation, state transfers, and channel upgrade paths for both the SpankChain camsite and a battle arena.</p>
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
                <Fade
                    top
                    duration={500}
                    distance='100px'
                >
                <div>
                <h4>Privacy</h4>
                
                <p>Since all of the games we build are completely decentralized and exist entirely in the blockchain, user privacy is a concern. While public keys obfuscate identity, they do not provide real anonymity. We are conducting research into methods for addressing this concern through zkSNARKs or RingCT type constructs.
                </p>
                </div>
                </Fade>
                
                
            </div>
        );
    }
}

export default Research;
