import React from 'react';

function Bullet(props) {

    let color = null;

    if (props.itemStatus == 'Alive') {
        color = 'green';
    }

    else if (props.itemStatus == 'Dead') {
        color = 'red';
    }

    else {
        color = 'grey';
    }

    return (
        <span>
            <div className='bullet' style={{ backgroundColor: color, }}></div>
            <p>{props.itemStatus} - {props.itemSpecies}</p>
        </span>
    );
}

export default Bullet;