import React from 'react';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, desc, img, price } = service

    return (
        <div className="card position-relative p-2 shadow rounded" style={{ width: '18rem' }}>
            <img className="card-img-top" height={200} src={img} alt="service-img" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <p className="card-text mb-5">${price}</p>
                <Link to="/" className="btn btn-primary position-absolute bottom-0 my-2">Check Out</Link>
            </div>
        </div>
    );
};

export default Service;