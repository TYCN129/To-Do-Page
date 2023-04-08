import React, { useEffect, useState } from 'react';

const Header = (props) => {
    const [greeting, setGreeting] = useState("");
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const refreshClock = setInterval(() => {
            setTime(new Date());
            const currentHour = time.getHours();
            if (currentHour < 12) {
                setGreeting("morning")
            } else if (currentHour < 18) {
                setGreeting("afternoon")
            } else {
                setGreeting("evening");
            }
        }, 1000);

        return () => clearInterval(refreshClock);
    });

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className='Header'>
            <h1 className='Clock'>{`${hours}:${minutes}:${seconds}`}</h1>
            <h1 className='Greeting'>Good {greeting}, Vedant.</h1>
        </div>
    );
}

export default Header;