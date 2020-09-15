import React from 'react';

const Card = ( {name, email, id} ) => {
    return (
        <div className="robot-card bg-success text-white text-center shadow rounded px-3 mx-2 mb-4">
            <img src={`https://robohash.org/${name+id}?size=185x185`} alt="robot avatar photo"/>
            <div>
                <h2 className="mt-3 mb-0 mx-auto font-weight-light lead">{name}</h2>
                <p className="mt-0 font-weight-light ">{email}</p>
            </div>
        </div>
    );
}

export default Card;