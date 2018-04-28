import React, { Component } from 'react';

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
                        <img src={nathan} className='image clip' width='150px' />
                        <h3>Nathan Ginnever</h3>
                        <p>Applied Cryptography</p>
                    </div>
                    <div className='card'>
                        <img src={tiffany} className='image clip' width='150px' />
                        <h3>Tiffany Ou</h3>
                        <p>Cat Herder</p>
                    </div>
                    <div className='card'>
                        <img src={jonathan} className='image clip' width='150px' />
                        <h3>Jonathan Dunlap</h3>
                        <p>Lead Optimist Alchemist</p>
                    </div>
                    <div className='card'>
                        <img src={will} className='image clip' width='150px' />
                        <h3>Will Vatcher</h3>
                        <p>Web Slinger</p>
                    </div>

                </div>
                <div className='team-2'>
                    <div className='card'>
                        <img src={adrian} className='image clip' width='150px' />
                        <h3>Adrian Karpenkopf</h3>
                        <p>Master of Puppets</p>
                    </div>
                    <div className='card'>
                        <img src={fede} className='image clip' width='150px' />
                        <h3>Federico Balart</h3>
                        <p>Monsters Manufacturer</p>
                    </div>
                    <div className='card'>
                        <img src={james} className='image clip' width='200px' />
                        <h3>James Young</h3>
                        <p>Advisor</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
