import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'; import Service from '../Service/Service';
const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <>
            <div className='banner'>
                <div class="banner-desc">
                    <h1>I'm Dr.Karim Ullah</h1>
                    <p>heyi!! this is Karim. MBBS, FCPS (Surgery), Fellowship (Hepatobiliary Pancreatic Surgery and Liver Transplant)</p>
                    <Link class="know-more-btn" to="/">Hit to Contact....</Link>
                </div>
            </div>
            <div className='pt-5 container'>
                <h2 className='text-center py-5'>My Services</h2>
                <div className='row justify-content-center gap-4'>
                    {
                        services.map(service => <Service service={service} key={service.id} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;