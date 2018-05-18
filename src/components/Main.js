import React, { Component } from 'react';
import logo from '../assets/Logos/FL_Logo.png';
import LabAnimation from './Lab-animation';


class Main extends Component {
    render() {

        return (
            <div id='Main' className='main'>
                
                <div className='logo'>
                    <img src={logo} alt='Finality-Labs-Logo' />
                </div>
                {/* <div className='lab-outer'>
                    <LabAnimation />
                </div> */}
                
                
            </div>
        );
    }
}

export default Main;
