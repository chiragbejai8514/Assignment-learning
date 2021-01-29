import React, { useState, useEffect } from 'react'
import data from './json.js'
import './ContainerMenu.css'

function ContainerMenu() {
    const [items] = useState(data);


    const menuItems = items.map(item =>
        <div className="sidenav__item" style={{ backgroundImage: `url(${item.backImage})` }} >
            {item.id}
        </div>)
    return (


        <div class="sidenav">
            <div className="company-logo"><img src="image/logo.png" className="company-logo-image" /></div>
            {menuItems}
            <div className="company-logo-name">Codecraft</div>
        </div>


    )



}

export default ContainerMenu;

