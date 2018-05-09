import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import github from '../assets/Social/github.png'

class Works extends Component {
    render() {
        return (
            <div id='Development' className='works'>
                <Fade left
                      duration={500}
                      distance='100px'>
                <div className='works-content'>
                    <h1>Development</h1>
                    <h2>Tools</h2>
                    <a href='https://github.com/layer2lib/js-layer2lib' rel="noopener noreferrer" target='_blank'><h4>Layer2lib <img src={github} width='20px' alt='Github'/></h4></a>
                    
                    <p>Finality Labs and SpankChain are building a general purpose Ethereum layer 2 scalability library to help other dApps quickly boot up their own scalability solutions for payment networks, games, and more.</p>
                    
                </div>
                </Fade>
                <Fade left
                      duration={500}
                      distance='100px'>
                <div className='works-content'>
                    <h2>Games</h2>
                    <h4>Hero Fighter (Turn-based State-channel game)</h4>
                    
                    <p>Finality Labs is currently engineering the latest ideas in state-channels theory into a novel turn-style fighting system. This system will be composed of rare collectable heroes that are generated and discovered in a mining process. These heroes may battle for wagers, ownership, or to the death. A market place developed around these will be ran in the gaming district.</p>
                    
                </div>
                </Fade>
                <Fade left
                      duration={500}
                      distance='100px'>
                <div className='works-content'>
                      <h4>RPG</h4>
                      <p>State-channels are good for state where consensus can be unanimously signed off on by the participants of the battle. However it might be nice to allow something like a level up system from the heroes battles. This would require a mechanism to enforce rules on the battle games such that no advantage can be gained by introducing state from the battle back into the arena. We are actively researching RPG style games that may sit on a Plasma chain that enforces rules that keep players honest. More to come on this soon.</p>
                  </div>
                </Fade>
                <Fade left
                      duration={500}
                      distance='100px'>
                <div className='works-content'>
                    <h4>Project [CODENAME]</h4>
                    <p>In collaboration with Decentraland, we will jointly build on the metaverse by respecting land units already built in decentraland. This allows for a really interesting collaboration idea we have with DCL and our RPG games we are working on. More on this to be announced later!</p>
                </div>
                </Fade>
            </div>
        );
    }
}

export default Works;
