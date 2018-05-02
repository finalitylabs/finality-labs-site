import React, { Component } from 'react';
import logo from '../assets/Logos/ckba-logo.png';

class Works extends Component {
    render() {
        return (
            <div id='Works' className='works'>
                
                <div className='works-content'>
                    <h1>Development</h1>
                    <h2>Games</h2>
                    <h4>CRYPTOKITTIES BATTLE ARENA</h4>
                    
                    <p>CryptoKitties Battle Arena (CKBA) is a turn-style based fighting system that allows you to deposit your favorite CryptoKitties into a solidity contract called "The Arena". The Arena maintains the total state of all kitteh fighting stats. Upon deposit, the genetic sequence of the CryptoKitty is read from their ERC721 object to determine which genetic sequence equals higher or lower base power ratings that impact the overall kitty stats like HP and DP. To engage in battle, two parties will break away into a state-channel to play out a turn-style fighting game. The outcome of the channel fight is ultimately settled back to the main-chain in the form of a wager in Ether, kitty ownership transfer, or kitty burn (0x0).</p>
                    
                </div>
                <div className='ckba-logo-outer'>
                    <img src={logo} alt='CryptoKitties Logo' />
                </div>
                <div className='works-content'>
                    <h4>RPG</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra tellus nec quam tincidunt imperdiet. Vestibulum consequat, nisl a pulvinar interdum, massa lacus maximus augue, at feugiat odio tellus a urna. Mauris elementum, sem sit amet vulputate cursus, purus ipsum consequat nibh, convallis fermentum lorem ante sed elit. Sed eleifend non urna ac feugiat. Etiam ac pretium nibh. In efficitur magna vel volutpat luctus. Fusce vulputate tellus a tortor vulputate pharetra. Pellentesque dictum enim ut molestie mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod ante eu porttitor tempor. Nunc ut vestibulum mauris. Ut molestie convallis dui ac efficitur. Praesent arcu justo, pretium eget feugiat et, fringilla fermentum ex. Vivamus a sapien justo. Pellentesque eu malesuada sem.</p>
                </div>
                <div className='works-content'>
                    <h4>Project [CODENAME]</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra tellus nec quam tincidunt imperdiet. Vestibulum consequat, nisl a pulvinar interdum, massa lacus maximus augue, at feugiat odio tellus a urna. Mauris elementum, sem sit amet vulputate cursus, purus ipsum consequat nibh, convallis fermentum lorem ante sed elit. Sed eleifend non urna ac feugiat. Etiam ac pretium nibh. In efficitur magna vel volutpat luctus. Fusce vulputate tellus a tortor vulputate pharetra. Pellentesque dictum enim ut molestie mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer euismod ante eu porttitor tempor. Nunc ut vestibulum mauris. Ut molestie convallis dui ac efficitur. Praesent arcu justo, pretium eget feugiat et, fringilla fermentum ex. Vivamus a sapien justo. Pellentesque eu malesuada sem.</p>
                </div>
            </div>
        );
    }
}

export default Works;
