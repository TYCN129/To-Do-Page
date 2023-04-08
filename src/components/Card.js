import React from 'react';
import HeaderButtons from './HeaderButtons';
import TaskList from './TaskList';

const Card = (props) => {
    return (
        <div className='Card'>
            <HeaderButtons />
            <TaskList />
        </div>
    );
}

export default Card;