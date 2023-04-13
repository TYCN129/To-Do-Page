import React, { useState, createContext } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export const CardContext = createContext();

const Card = () => {
    const [mode, setMode] = useState("home");

    return (
        <div className='Card'>
            <CardContext.Provider value={{mode, setMode}}>
            <CardHeader />
            <CardBody mode={mode} />
            </CardContext.Provider>
        </div>
    );
}

export default Card;