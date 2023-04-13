import React from 'react';
import Quote from './Quote';
import Card from './Card';
import Header from './Header';
import videoBG from '../assets/v1.mp4';

const Main = (props) => {
    return (
        <div className='Main'>
            <video src={videoBG} autoPlay loop muted />
            <div className='overlay'>
                <Header />
                <Card />
                <Quote quote={props.quote} />
            </div>
        </div>
    );
}

export default Main;