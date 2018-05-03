import React, { Component } from 'react';
import * as $ from 'jquery';
import {TimelineMax} from 'gsap';


class Loader extends Component {
    
    intro(){

        let purp1 = $(".purp1"),
        purp2 = $(".purp2"),
        purp3 = $(".purp3"),
        teal1 = $(".teal1"),
        teal2 = $(".teal2"),
        teal3 = $(".teal3"),
        tl;

        tl = new TimelineMax();

        tl.set(purp1, {xPercent: 200, yPercent: -200})
        tl.set(purp2, {xPercent: 200, yPercent: 200})
        tl.set(purp3, {xPercent: 200, yPercent: -200})
        tl.set(teal1, {xPercent: 200, yPercent: 0})
        tl.set(teal2, {xPercent: 200, yPercent: 0})
        tl.set(teal3, {xPercent: -200, yPercent: -200})

        tl.to(purp1, 0.2, {xPercent: 50, yPercent: 100}, 1.2)
        tl.to(purp2, 0.2, {xPercent: 0, yPercent: 0}, 1.3)
        tl.to(purp3, 0.2, {xPercent: 0, yPercent: -68}, 0.7)
        tl.to(teal1, 0.2, {xPercent: 0, yPercent: 120}, 1)
        tl.to(teal2, 0.2, {xPercent: 0, yPercent: 0}, 1.4)
        tl.to(teal3, 0.2, {xPercent: 0, yPercent: -39}, 0.8)

        tl.to(purp1, 0.8, {xPercent: 0, yPercent: 0}, 1.8)
        tl.to(purp2, 0.8, {xPercent: 0, yPercent: 0}, 1.8)
        tl.to(purp3, 0.8, {xPercent: 0, yPercent: 0}, 1.8)
        tl.to(teal1, 0.8, {xPercent: 0, yPercent: 0}, 1.8)
        tl.to(teal2, 0.8, {xPercent: 0, yPercent: 0}, 1.8)
        tl.to(teal3, 0.8, {xPercent: 0, yPercent: 0}, 1.8)

        tl.to(purp1, 0.8, {opacity: 0}, 2.6)
        tl.to(purp2, 0.8, {opacity: 0}, 2.6)
        tl.to(purp3, 0.8, {opacity: 0}, 2.6)
        tl.to(teal1, 0.8, {opacity: 0}, 2.6)
        tl.to(teal2, 0.8, {opacity: 0}, 2.6)
        tl.to(teal3, 0.8, {opacity: 0}, 2.6)

        return tl
  
    }

    componentDidMount(){
        return this.intro()
    }
    


    render() {
        
        return (
            
                <div className='intro-outer'>
                    <svg id='SVG' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 144 144'>
                        <defs />
                            <polygon className='purp1' points='34.83 15.65 11.6 15.65 23.23 31.32 23.25 31.3 34.84 15.67 34.83 15.65'/>
                            <polygon className='teal1' points='23.21 0 23.22 0.01 11.62 15.64 11.62 15.65 34.83 15.65 132.39 15.65 144 0 23.21 0'/>
                            <polygon className='teal3' points='23.23 62.63 0 62.63 48.77 128.35 60.38 144 83.61 144 23.23 62.63'/>
                            <polygon className='purp2' points='83.61 81.39 46.46 31.32 34.84 46.98 71.99 97.04 83.61 81.39'/>
                            <polygon className='teal2' points='109.16 46.96 120.77 31.3 46.46 31.3 34.84 46.98 81.31 46.96 109.16 46.96'/>
                            <polygon className='purp3' points='95.21 97.05 71.99 128.35 83.61 144 118.45 97.04 95.21 97.05'/>
                    </svg>
                </div>
        
        );
    }
}

export default Loader;
