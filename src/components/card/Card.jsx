import React, { useEffect, useState } from 'react';

import './card.css';

import axios from 'axios';

import Bullet from './Bullet';

function Card() {


    const [caracter, setCaracter] = useState([])


    useEffect(() => {

        axios.get("https://rickandmortyapi.com/api/character")
            .then(function (res) {
                setCaracter(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            });

    }, []);

    return (
        <div className='center'>
            {
                caracter.map((item) => {
                    return <section key={item.id}>
                        <div className='person'><img src={item.image} alt="image" /></div>
                        <div className='text'>
                            <h3>{item.name}</h3>

                            <Bullet itemStatus={item.status} itemSpecies={item.species} />

                            <div className='location'>
                                <p>Last know location</p>
                                <h4>{item.location.name}</h4>
                            </div>

                            <div className='first'>
                                <p>First seen in</p>
                                <h4>{item.origin.name}</h4>
                            </div>


                        </div>
                    </section>
                })
            }

        </div >

    );
}

export default Card;
