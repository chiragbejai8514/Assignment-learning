import React from 'react'

import '../navBar.css'

import data from './data.json'

const items = ['Songs', 'Movies', 'Videos', 'My Test Folder', 'Screenshots']

const NavBar = () => {



    let items1 = data.data;



    for (var k in items1) {
        console.log(items1[k])


    }

    // const navItems1 = ite.map((item, index, arr) => {
    //     console.log(1)
    // }

    // )
    const movies = data.data.Movies;

    // let users = data.data[Movies];





    const navItems = items.map((item, index, arr) => (
        <div className="nav-bar__item">
            <div className="nav-bar__item-name">{item}</div>
            <div className="dropdown"></div>
        </div>

    ))

    return (
        <React.Fragment>
            {navItems}
        </React.Fragment>
    )

}

export default NavBar
