import React, { Component } from 'react';
import logo from '../assets/Logos/FL_Logo.png';




class Main extends Component {
    render() {

        return (
            <div id='Main'className='main'>
                <div className='logo'>
                    <img src={logo} alt='Finality-Labs-logo' width='150px'/>
                </div>
                
                
            </div>
        );
    }
}

export default Main;
