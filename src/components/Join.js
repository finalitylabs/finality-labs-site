import React, { Component } from 'react';
import twitter from '../assets/Social/twitter.png'
import reddit from '../assets/Social/reddit.png'
import medium from '../assets/Social/medium.png'
import github from '../assets/Social/github.png'
import facebook from '../assets/Social/facebook.png'
import email from '../assets/Social/email.png'
import discord from '../assets/Social/discord.png'

class Join extends Component {
    render() {
        return (
            <div id='Join' className='join-outer'>
                <div className='join'>
                    <div>
                        <a href='https://twitter.com/finalitylabs' rel="noopener noreferrer" target='_blank'>
                            <img src={twitter} alt='' width='50px'/>
                        </a>
                    </div>
                    <div>
                        <a href='mailto:team@finalitylabs.co'>
                            <img src={email} alt='' width='60px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/finalitylabs' rel="noopener noreferrer" target='_blank'>
                            <img src={github} alt='' width='50px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://medium.com/finality-labs' rel="noopener noreferrer" target='_blank'>
                            <img src={medium} alt='' width='50px'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://discord.gg/sT9sbba' rel="noopener noreferrer" target='_blank'>
                            <img src={discord} alt='' width='50px'/>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <img src={facebook} alt='' width='60px'/>
                        </a>
                    </div>
                    <div>
                        <a href='#'>
                            <img src={reddit} alt='' width='50px'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Join;
