import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import "./AppHeader.css"

export default class AppHeader extends Component {


    render() {
        return (
            <nav className="nav-contianer flex row space-between center">
                <div className="logo-container"></div>
                <li className="nav-item flex center"> 
                    <NavLink className="nav-link flex center" exact to="/" activeClassName="active-item">Home</NavLink>
                </li>
                <li className="nav-item flex center">
                    <NavLink className="nav-link flex center" exact to="/characters" activeClassName="active-item">Characters</NavLink>
                </li>
                <li className="nav-item flex center">
                    <NavLink className="nav-link flex center" exact to="/about" activeClassName="active-item">About</NavLink>
                </li>
            </nav>
        )
    }
}