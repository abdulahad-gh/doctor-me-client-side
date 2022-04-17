import React from 'react';

const ClientReviews = ({ client }) => {
    const { clientRev, clientImg, clientName, rating } = client
    return (
        <div className="card p-2 shadow rounded">

            <div className='d-flex'>
                <img className="rounded-circle object-cover" width={70} src={clientImg} alt="service-img" />
                <h5 className="card-title">{clientName}</h5>
            </div>
            <div className="">
                <p className="card-text">{clientRev}</p>
                <p className="card-text">{rating}</p>
            </div>

        </div>
    );
};

export default ClientReviews;