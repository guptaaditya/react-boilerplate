import React from 'react';
import logo from 'img/logo.svg';
import './header.scss';

export default function Header(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Engineers at work. Encryptics on web is in progress.
                </p>
            </header>
        </div>
    );
}