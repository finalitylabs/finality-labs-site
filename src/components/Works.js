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
            </div>
        );
    }
}

export default Works;