import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div >
            <div className='bg-dark text-white d-md-flex text-center justify-content-between mt-5 p-md-4 '>
                <div><h3>Doctor Me</h3>
                    © {year} Doctor Me All Rights Reserved
                </div>
                <div>
                    <Link to='https://web.facebook.com/'><img width={60} src="https://i.ibb.co/0rSZVCk/download-removebg-preview.png" alt="" /></Link>
                    <Link to='https://www.linkedin.com/'><img width={60} src="https://i.ibb.co/80Mg2fR/images-2-removebg-preview.png" alt="" /></Link>
                    <Link to='https://twitter.com/'><img width={60} src="https://i.ibb.co/tb0RBv2/download-removebg-preview-1.png" alt="" /></Link>
                    <Link to='https://www.youtube.com/'><img width={60} src="https://i.ibb.co/W68q05x/images-4-removebg-preview-1.png" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;