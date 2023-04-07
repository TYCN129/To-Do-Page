import React from 'react';
import videoBG from '../assets/videoBG.mp4';

const Main = async () => {
    return (
        <div className='Main'>
            <video src={videoBG} autoPlay loop muted />
            <div className='overlay'></div>
            <div className='card'>

            </div>
        </div>
    );
}

export default Main;