import React, { Component } from 'react';
import lab from '../assets/lab-apng.png'


class Main extends Component {
    render() {

        return (
            <div id='Main'className='main'>
                <div className='logo'>
                <p>Logo</p>
                </div>
                <div className='nav'>
                    <img src={lab}/>
                    
                </div>
            </div>
        );
    }
}

export default Main;
