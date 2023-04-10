import React from 'react';

const Main = (props) => {
    return (
        <div className='Quote'>
            <p>{props.quote}</p>
        </div>
    );
}

export default Main;