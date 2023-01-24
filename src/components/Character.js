import React from 'react';

const Character = ({ character }) => {
    const { image, name, status, species, location: { name: locationName } } = character
    return (
        <section className='card'>
            <img src={image} alt=""/>

            <div className='text-container'>
                <h3>{name}</h3>
                <p className='status'>{status} - {species}</p>
                <p className='title'>last seen</p>
                <p>{locationName}</p>
            </div>
        </section>
    );
};

export default Character;