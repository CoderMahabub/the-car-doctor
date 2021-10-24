import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, img, description } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="Single Service" />
            <h1>{name}</h1>
            <h3>Price: {price}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning rounded">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;