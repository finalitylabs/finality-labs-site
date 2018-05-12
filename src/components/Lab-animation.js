import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/lab.json';

class LabAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
      }
     
      render() {
        const defaultOptions = {
          loop: true,
          autoplay: true, 
          animationData: animationData,
        };

    
        return (
            <div className='lab-animation'>
                <Lottie options={defaultOptions}
              
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
            </div>
        );
    }
}

export default LabAnimation;
