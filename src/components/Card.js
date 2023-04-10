import React from 'react';
import HeaderButtons from './HeaderButtons';
import CardBody from './CardBody';

const Card = (props) => {
    return (
        <div className='Card'>
            <HeaderButtons />
            <CardBody />
        </div>
    );
}

export default Card;