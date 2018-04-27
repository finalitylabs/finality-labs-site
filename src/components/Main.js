import React, { Component } from 'react';
import logo from '../assets/Logos/FL_Logo.png';
import lab from '../assets/lab-apng.png';



class Main extends Component {
    render() {

        return (
            <div id='Main'className='main'>
                
                <div className='logo'>
                    <img src={logo} alt='Finality-Labs-logo' width='150px'/>
                </div>

                <img class='' src={lab} alt='Finality-Labs-logo' width='754px' height='526px'/>
                
            </div>
        );
    }
}

export default Main;
