import React from 'react';

const CardBody = (props) => {
    const listItems = [{
        mode: "home",
        items: [
            { id: 1, text: 'Item 1' },
            { id: 2, text: 'Item 2' },
            { id: 3, text: 'Item 3' },
            { id: 4, text: 'Item 4' },
            { id: 5, text: 'Item 5' },
            { id: 6, text: 'Item 6' },
            { id: 7, text: 'Item 7' },
            { id: 8, text: 'Item 8' },
            { id: 9, text: 'Item 9' },
            { id: 10, text: 'Item 10' },
            { id: 11, text: 'Item 11' },
            { id: 12, text: 'Item 12' },
            { id: 13, text: 'Item 13' },
            { id: 14, text: 'Item 14' },
            { id: 15, text: 'Item 15' }
        ]
    },
    {
        mode: "work",
        items: [
            { id: 16, text: 'Item 16' },
            { id: 17, text: 'Item 17' },
            { id: 18, text: 'Item 18' },
            { id: 19, text: 'Item 19' },
            { id: 20, text: 'Item 20' },
            { id: 21, text: 'Item 21' },
            { id: 22, text: 'Item 22' },
            { id: 23, text: 'Item 23' },
            { id: 24, text: 'Item 24' },
            { id: 25, text: 'Item 25' },
            { id: 26, text: 'Item 26' },
            { id: 27, text: 'Item 27' },
            { id: 28, text: 'Item 28' },
            { id: 29, text: 'Item 29' },
            { id: 30, text: 'Item 30' }
        ]
    }];

    const findArrayByMode = (mode) => listItems.filter((list) => list.mode === mode)
    
    return (
        <div className='CardBody'>
            <div className='ListContainer'>
                <ul>
                    {(findArrayByMode(props.mode).length !== 0) && findArrayByMode(props.mode)[0].items.map((item) => {
                        return <h3 key={item.id}>{item.text}</h3>
                    })}
                </ul>
                
            </div>
        </div>
    );
}

export default CardBody;