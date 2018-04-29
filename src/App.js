import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import Mission from './components/Mission';
import Works from './components/Works';
import Team from './components/Team';
import Join from './components/Join';

import $ from 'jquery';
import { slide as Menu } from 'react-burger-menu';
import Research from './components/Research';


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }

    this.handleStateChange = this.handleStateChange.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})

  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render(){
    return (
      <div id='App'>
        <Menu 
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right 
          className='menu'
          width={'200px'}>
            <a onClick={() => this.closeMenu()} href='#Main'>Home</a>
            <a onClick={() => this.closeMenu()} href='#Mission'>Mission</a>
            <a onClick={() => this.closeMenu()} href='#Research'>Research</a>
            <a onClick={() => this.closeMenu()} href='#Works'>Works</a>
            <a onClick={() => this.closeMenu()} href='#Team'>Team</a>
            <a onClick={() => this.closeMenu()} href='#Join'>Join</a>
        </Menu>
        <Main />
        <Mission />
        <Research />
        <Works />
        <Team />
        <Join />
      </div>
    );
  }
}

export default App;