import React from 'react';

const NotFound = () => {
    return (
        <div style={{ marginBottom: '200px', overflow: 'hidden' }}>

            <div className='row align-items-center mt-5 p-5'>
                <h1 className='col col-md-6'>
                    404!!Page not Found. Try to Correct...
                </h1>
                <div className='col col-md-6 text-center'>
                    <img className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiYOsC7UdFcyU4GNAogs9sXnxaO1AYbH6ag&usqp=CAU" alt="" />
                </div>

            </div >
        </div >
    );
};

export default NotFound;