import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'; import Service from '../Service/Service';
import ClientReviews from '../ClientReviews/ClientReviews';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div id='home' className='banner'>
                <div className="banner-desc">
                    <h1>I'm Dr.Karim Ullah</h1>
                    <p>heyi!! this is Karim. MBBS, FCPS (Surgery), Fellowship (Hepatobiliary Pancreatic Surgery and Liver Transplant)</p>
                    <Link className="know-more-btn" to="/">Hit to Contact....</Link>
                </div>
            </div>
            <div id='services' className='pt-5 pt-md-5 container'>
                <h2 className='text-center py-3 py-md-5'>My Services</h2>
                <div className='row justify-content-center gap-4'>
                    {
                        services.map(service => <Service service={service} key={service.id} />)
                    }
                </div>
            </div>
            <div id='client-says' className='pt-5 pt-md-5 container'>
                <h2 className='text-center py-md-5'>Client Says</h2>
                <div className='row align-items-center'>
                    <img className='col-md-6' src="https://i.ibb.co/WGnTdbH/19197306-1.jpg" alt="" />
                    <div className='col-md-6'>
                        <div className='row g-2'>
                            {
                                services.map(client => <ClientReviews client={client} key={client.id} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;