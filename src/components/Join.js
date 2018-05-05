import React, { Component } from 'react';
import twitter from '../assets/Social/twitter.png'
import reddit from '../assets/Social/reddit.png'
import medium from '../assets/Social/medium.png'
import github from '../assets/Social/github.png'
import email from '../assets/Social/email.png'
import discord from '../assets/Social/discord.png'
import sc from '../assets/Partners/SpankChain_Logo.png';
import dzx from '../assets/Partners/district0X_Logo-white.png';
import dl from '../assets/Partners/Decentraland_Logo-white.png';


class Join extends Component {
    render() {
        return (
            <div id='Join' className='join-outer'>
                <div className='partners-outer'>
                    <h1>Partnerships</h1>
                    <div className='partners'>
                        <a href='https://spankchain.com/' rel="noopener noreferrer" target='_blank'>
                            <img src={sc} alt ='' width='150px' /></a>
                        <a href='https://district0x.io/' rel="noopener noreferrer" target='_blank'>
                            <img src={dzx} alt ='' width='150px' /></a>
                        <a href='https://decentraland.org/' rel="noopener noreferrer" target='_blank'>
                            <img src={dl} alt ='' width='150px' /></a>
                    </div>
                </div>
                <div className='join'>
                    <div>
                        <a href='mailto:team@finalitylabs.co'>
                            <img src={email} alt='' width='33.75px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://discord.gg/sT9sbba' rel="noopener noreferrer" target='_blank'>
                            <img src={discord} alt='' width='28.125px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/finalitylabs' rel="noopener noreferrer" target='_blank'>
                            <img src={github} alt='' width='28.125px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://medium.com/finality-labs' rel="noopener noreferrer" target='_blank'>
                            <img src={medium} alt='' width='28.125px'/>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <img src={reddit} alt='' width='28.125px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://twitter.com/finalitylabs' rel="noopener noreferrer" target='_blank'>
                            <img src={twitter} alt='' width='28.125px'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Join;
