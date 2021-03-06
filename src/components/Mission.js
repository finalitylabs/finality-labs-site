import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import AstroAnimation from './Astronaut-animation';
import SpaceStation from './SpaceStation';


class Mission extends Component {
    render() {
        return (
            <div>
            <div id='Mission' className='mission'>
            <SpaceStation />
            <Fade bottom
                        duration={500}
                        distance='100px'
                        >
                <div>
                    
                        <h1>Mission</h1>
                        
                        <p>Finality Labs is a community of researchers and engineers uniting to experiment with and create new applications of cryptographic systems. We build protocols, tools, games, and generally anything interesting. 
                        We imagine and practically implement solutions to hard challenges in computational sciences. Finality Labs is a non-profit that strives to coordinate those that are most invested in the systems they build and allow them to decide how it should be governed.</p>
                    

                        
                    

                </div>
                
            </Fade>
            
            </div>
            <AstroAnimation className='astro-animation'/>
            </div>
        );
    }
}

export default Mission;
