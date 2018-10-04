import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import github from '../assets/Social/github.png'
import ResearchBottom from './ResearchBottom';
import SpaceRobot from './SpaceRobot';
import ToolsAnimation from './Tools-animation';

class Works extends Component {
    render() {
        return (
            <div id='Development' className='works'>
                <ResearchBottom />
                <div className='tools-outer'>
                <ToolsAnimation />
                <Fade left
                      duration={500}
                      distance='100px'>
                    <div className='works-content'>
                        <h1>Development</h1>
                        <h2>Tools</h2>
                        <a href='https://github.com/layer2lib/js-layer2lib' rel="noopener noreferrer" target='_blank'><h4>Layer2lib <img src={github} width='20px' alt='Github'/></h4></a>
                        
                        <p>Finality Labs is building a general purpose Ethereum layer 2 scalability library to help other dApps quickly boot up their own scalability solutions for payment networks, games, and more.</p>
                        
                    </div>
                </Fade>
                </div>
                <div className='games-container'>
                    <div className='games-inner'>
                        
                        <Fade left
                            duration={500}
                            distance='100px'>
                        <div className='works-content'>
                            <h2>Games</h2>
                            <h4>Eternal Time Heroes (E.T.H. A turn-based state-channel game)</h4>
                            
                            <p>Finality Labs is currently engineering the latest ideas in state-channels and plasma theory into a novel turn-style fighting system. This system will be composed of rare collectable heroes that are generated and discovered by winning battles. These heroes may battle for wagers, ownership, or to the death as we program advanced logic  off-chain that settles to NFT swaps.</p>
                            
                        </div>
                        </Fade>
                        <Fade left
                            duration={500}
                            distance='100px'>
                        <div className='works-content'>
                            <h4>RPG</h4>
                            <p>We are actively researching RPG style games that may sit on a Plasma chain that enforces rules that keep players honest. This is a challenging system as state ownership may not be clear. More to come on this soon.</p>
                        </div>
                        </Fade>
                        <Fade left
                            duration={500}
                            distance='100px'>
                        <div className='works-content'>
                            <h4>Metaverse works</h4>
                            <p>In collaboration with Decentraland and other NFT land systems we are collaborating on ideas of state-channel logic similar to that running E.T.H. battles but using land units or other objects. More on this to be announced later!</p>
                        </div>
                    
                        </Fade>
                    </div>
                    <SpaceRobot className='space-robot'/>
                </div>
            </div>
        );
    }
}

export default Works;
