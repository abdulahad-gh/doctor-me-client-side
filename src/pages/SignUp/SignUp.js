import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-25 mx-auto mt-5 px-5 rounded' style={{ marginBottom: '170px', backgroundColor: 'gray' }}>

            <h4 className='text-center py-2 text-white'>SignUp</h4>
            <form>
                <input type="text" name='name' class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" />

                <input type="email" name='email' class="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                <input type="password" name='password' class="form-control mb-2" id="exampleInputPassword1" placeholder="Password" />
                <input type="password" name='confirmPassword' class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />

                <p className='text-white mb-0 mt-2'>Already Account? Please <Link to='/sign-in' className='text-primary font-weight-bold'>SignIn</Link></p>

                <button type="submit" class="btn btn-primary mt-3 mb-4">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;