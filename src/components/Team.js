import React, { Component } from 'react';

import nathan from '../assets/Team/Nathan.png';
import tiffany from '../assets/Team/Tiffany.jpg';
import will from '../assets/Team/Will.png';
import adrian from '../assets/Team/Adrian.png';
import fede from '../assets/Team/Federico.png';
import james from '../assets/Team/James.png';
import jasper from '../assets/Team/Jasper.png';
import keyvan from '../assets/Team/Keyvan.png'

class Team extends Component {
    render() {
        return (
            <div id='Team' className='team-outer'>
                <h1>Team</h1>
                <div className='team'>
                    <div className='card'>
                        <img src={nathan} className='image clip' width='150px' alt='Nathan Ginnever' />
                        <p><strong>Nathan Ginnever</strong></p>
                        <p>Applied Cryptography</p>
                    </div>
                    <div className='card'>
                        <img src={james} className='image clip' width='150px' alt='James Young'/>
                        <p><strong>James Young</strong></p>
                        <p>Channel Manager</p>
                    </div>
                    <div className='card five'>
                        <img src={jasper} className='image clip' width='150px' alt='Jasper De Gooijer'/>
                        <p><strong>Jasper De Gooijer</strong></p>
                        <p>Web 3.0 Builder</p>
                    </div>
                    <div className='card'>
                        <img src={keyvan} className='image clip' width='150px' alt='Keyvan Kambakhsh'/>
                        <p><strong>Keyvan Kambakhsh</strong></p>
                        <p>Blockchain Artist</p>
                    </div>
                </div>
                <div className='team-2'>
                    <div className='card'>
                        <img src={will} className='image clip' width='150px' alt='Will Vatcher'/>
                        <p><strong>Will Vatcher</strong></p>
                        <p>Web Slinger</p>
                    </div>
                    <div className='card'>
                        <img src={adrian} className='image clip' width='150px' alt='Adrian Karpenkopf'/>
                        <p><strong>Adrian Karpenkopf</strong></p>
                        <p>Monster Manufacturer</p>
                    </div>
                    <div className='card'>
                        <img src={fede} className='image clip' width='150px' alt='Federico Balart'/>
                        <p><strong>Federico Balart</strong></p>
                        <p>Master of Puppets</p>
                    </div>
                    <div className='card'>
                        <img src={tiffany} className='image clip' width='150px' alt='Tiffany Ou'/>
                        <p><strong>Tiffany Ou</strong></p>
                        <p>Cat Herder</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Team;
