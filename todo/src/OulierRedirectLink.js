import React from 'react';

const OulierRedirectLink = (props) => {

    return (
        <a href={props.link}>
            <div style={{
                width: '114px',
                borderRadius: '3px',
                padding: '5px 0',
                backgroundImage: 'linear-gradient(97deg, #11b3c9 6%, #1fc978 98%)',
                fontFamily: 'Heebo',
                fontSize: '10px',
                color: 'white',
                textAlign: 'center'
            }} >View in audit trial </div>
        </a >
    )

}

export default OulierRedirectLink