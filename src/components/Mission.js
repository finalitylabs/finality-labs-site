import React, { Component } from 'react';
import mission from '../assets/Mission_Image.png'

class Mission extends Component {
    render() {
        return (
            <div id='Mission' className='mission'>
                <div>
                    <h1>Mission</h1>
                    <p>Finality Labs is a community of devs, modders, hackers, and gamers uniting to experiment with and create new applications of cryptographic systems. We build protocols, tools, games, and generally anything fun. 
                    We imagine and practically implement immersive, expansive, and inclusive gaming experiences. We strive to coordinate those that are most invested in the systems they build and allow them to decide how it should be governed.</p>

                    <img src={mission} alt='mission' width='1440px'/> 
                    

                </div>
                
                
                
            </div>
        );
    }
}

export default Mission;
