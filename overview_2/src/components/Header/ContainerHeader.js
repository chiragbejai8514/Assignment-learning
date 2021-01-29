import React from 'react'
import './ContainerHeader.css';

const ContainerHeader = () => {
    const textHeader = () => (<div className="header-text">OVERVIEW</div>
    );

    const iconHeader = () => {
        return (<div className="header-icon">
            <div className="header-icons" style={{ backgroundImage: `url(image/icon11.png)` }}></div>
            <div className="header-icons" style={{ backgroundImage: `url(image/icon10.png)` }}></div>
        </div>
        );
    };
    return (<div className="container-header">
        {textHeader()}
        {iconHeader()}
    </div>)
}

export default ContainerHeader;
