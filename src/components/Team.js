import React, { Component } from 'react';
import sc from '../assets/Partners/SpankChain_Logo.png';
import dzx from '../assets/Partners/district0X_Logo.png';
import dl from '../assets/Partners/Decentraland_Logo.png';
import az from '../assets/Partners/AxiomZen_Logo.png';

import nathan from '../assets/Team/Nathan.png';
import tiffany from '../assets/Team/Tiffany.png';
import will from '../assets/Team/Will.png';
import jonathan from '../assets/Team/Jonathan.png';
import adrian from '../assets/Team/Adrian.png';
import fede from '../assets/Team/Federico.png';
import james from '../assets/Team/James.png';

class Team extends Component {
    render() {
        return (
            <div id='Team' className='team-outer'>
                <h1>Team</h1>
                <div className='team'>
                    <div className='card'>
                        <img src={nathan} class='image clip' width='300px' />
                        <h3>Nathan Ginnever</h3>
                        <p>Applied Cryptography</p>
                    </div>
                    <div className='card'>
                        <img src={tiffany} class='image clip' width='150px' />
                        <h3>Tiffany Ou</h3>
                        <p>Cat Herder</p>
                    </div>
                    <div className='card'>
                        <img src={jonathan} class='image clip' width='150px' />
                        <h3>Jonathan Dunlap</h3>
                        <p>Lead Optimist Alchemist</p>
                    </div>
                    <div className='card'>
                        <img src={will} class='image clip' width='150px' />
                        <h3>Will Vatcher</h3>
                        <p>Web Laborer</p>
                    </div>

                </div>
                <div className='team'>
                    <div className='card'>
                        <img src={adrian} class='image clip' width='150px' />
                        <h3>Adrian Karpenkopf</h3>
                        <p>Master of Puppets</p>
                    </div>
                    <div className='card'>
                        <img src={fede} class='image clip' width='150px' />
                        <h3>Federico Balart</h3>
                        <p>Monsters Manufacturer</p>
                    </div>
                    <div className='card'>
                        <img src={james} class='image clip' width='150px' />
                        <h3>James Young</h3>
                        <p>Advisor</p>
                    </div>
                </div>
                <h2>Partnerships</h2>
                <div id='Team' className='team'>
                    <a href='https://spankchain.com/' rel="noopener noreferrer" target='_blank'>
                        <img src={sc} alt ='' width='200px' /></a>
                    <a href='https://district0x.io/' rel="noopener noreferrer" target='_blank'>
                        <img src={dzx} alt ='' width='200px' /></a>
                    <a href='https://decentraland.org/' rel="noopener noreferrer" target='_blank'>
                        <img src={dl} alt ='' width='200px' /></a>
                    <a href='https://www.axiomzen.co/' rel="noopener noreferrer" target='_blank'>
                        <img src={az} alt ='' width='200px' /></a>
                </div>
            </div>
        );
    }
}

export default Team;
