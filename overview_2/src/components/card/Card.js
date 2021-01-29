import React from 'react';
import './card.css';

function Card() {
    const renderHeader = () => {
        return (<div className="card-header"></div>);
    };

    const renderBody = () => {
        return (<div className="card-body"></div>);
    };

    const renderFooter = () => {
        return (<div className="card-footer"></div>);
    };

    return (
        <div className="card">
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
        </div>
    );
}

export default ContentTwo;
