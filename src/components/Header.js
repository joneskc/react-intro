import React, { Component } from 'react';
import logo from '../logo.svg';

const Header = (props) => {
    // CONSOLE LOG PROPS IF YOU EVER WANT TO KNOW WHAT IS BEING PASSED TO THIS COMPONENT
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{props.title}</h1>
        </header>
    )
}

export default Header