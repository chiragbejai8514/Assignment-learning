import React from 'react'

import './navBar.css'

import NavItem from './NavItem/NavItem'



const NavBar = () => {
    return (<div className="nav-bar row">
        <div className="nav-bar__container column">
            <a className="nav-bar__heading">ROOT</a>
            <NavItem />
        </div>
    </div>)
}

export default NavBar
