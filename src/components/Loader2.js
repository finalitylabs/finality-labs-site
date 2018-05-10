import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/logo.json'

import '../App.css'

class Loader2 extends Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
      }
     
      render() {
        const defaultOptions = {
          loop: false,
          autoplay: true, 
          animationData: animationData,
        };

    
        return (
            <div className='logo'>
                <Lottie options={defaultOptions}
              
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              width='300px'/>
            </div>
        );
    }
}

export default Loader2;
