import React from 'react';
import Quote from './Quote';
import Card from './Card';
import videoBG from '../assets/videoBG.mp4';

const Main = (props) => {
    return (
        <div className='Main'>
            <video src={videoBG} autoPlay loop muted />
            <div className='overlay'>
                <Card />
                <Quote quote={props.quote} />
            </div>
        </div>
    );
}

export default Main;