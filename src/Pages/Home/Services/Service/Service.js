import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, time, img, description } = service;
    return (
        <div className="service">
            <img src={img} alt="Single Service" />
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <h4>Time Required: {time} hours</h4>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;