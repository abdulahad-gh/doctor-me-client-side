import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='w-25 mx-auto mt-5 px-5 rounded' style={{ marginBottom: '170px', backgroundColor: 'gray' }}>

            <h4 className='text-center py-2 text-white'>SignIn</h4>
            <form>
                <div class="form-group">

                    <input type="email" class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div class="form-group">

                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <p className='text-white mb-0 mt-2'>don't Account?Please <Link to='/sign-up' className='text-warning'>SignUp</Link></p>
                <p className='text-white'>forget password<Link to='/' className='text-danger'> Reset</Link></p>
                <button type="submit" class="btn btn-primary mt-3 mb-4">SignIn</button>
            </form>
        </div>
    );
};

export default SignIn;