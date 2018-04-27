import React, { Component } from 'react';
import lab from '../assets/lab-apng.png'


class Main extends Component {
    render() {

        return (
            <div id='Main'className='main'>
                <div className='logo'>
                <p>Logo</p>
                </div>
                <img src={lab} width="754" height="526"/>
                <div className='nav'>
                    
                    
                </div>
            </div>
        );
    }
}

export default Main;
