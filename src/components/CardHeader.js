import React, { useContext } from 'react';
import { CardContext } from './Card';

const CardHeader = (props) => {
    const {setMode} = useContext(CardContext);

    const handleClick = (mode) => {
        setMode(mode);
    }

    return (
        <div className='CardHeader'>
            <div className='work' onClick={() => {handleClick('work')}}>
                <h3>Work</h3>
            </div>
            <div className='separator'><h3>|</h3></div>
            <div className='home' onClick={() => {handleClick('home')}}>
                <h3>Home</h3>
            </div>
        </div>
    );
}

export default CardHeader;