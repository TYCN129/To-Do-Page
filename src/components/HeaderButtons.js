import React from 'react';

const HeaderButtons = (props) => {
    return (
        <div className='HeaderButtons'>
            <div className='work'>
                <h3>Work</h3>
            </div>
            <div className='separator'><h3>|</h3></div>
            <div className='home'>
                <h3>Home</h3>
            </div>
        </div>
    );
}

export default HeaderButtons;