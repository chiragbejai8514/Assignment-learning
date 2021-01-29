import React from 'react';

const OutlierActionButton = (props) => {
    const { themeColor, iconPath, label, link } = props
    return (
        <a href={link}>
            <div style={{
                border: `solid 1px ${themeColor}`,
                color: `${themeColor}`,
                width: '65px',
                padding: ' 5px 0',
                borderRadius: '2px',
                fontFamily: ' Heebo',
                fontSize: ' 8px',
                fontWeight: 'bold',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    marginRight: '5px'
                }}>
                    <img src={iconPath} alt="" />
                </div>
                <div style={{ display: 'inline-block' }}>{label}</div>
            </div>
        </a>
    )

}

export default OutlierActionButton