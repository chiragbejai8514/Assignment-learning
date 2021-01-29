import React from 'react';


const progressBar = (props) => {
    return (
        <div className="progressBar__outer">
            <div className="progressBar__inner" style={{ width: `${props.children}%` }}></div>
        </div>
    )
}

export default progressBar