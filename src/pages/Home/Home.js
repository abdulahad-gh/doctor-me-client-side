import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'; const Home = () => {
    return (
        <div className='banner'>
            <div class="banner-desc">
                <h1>I'm Dr.Karim Ullah</h1>
                <p>heyi!! this is Karim. MBBS, FCPS (Surgery), Fellowship (Hepatobiliary Pancreatic Surgery and Liver Transplant)</p>
                <Link class="know-more-btn" to="/">Hit to Contact....</Link>
            </div>
        </div>
    );
};

export default Home;