import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-S'>
            <img src={`https://robohash.org//${id}`} alt='robots'/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}



export default Card;