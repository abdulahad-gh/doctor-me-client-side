import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase-init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        ,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [passError, setPassError] = useState('')
    const navigate = useNavigate()
    if (user) {
        navigate('/')
    }
    const newUserHandle = e => {
        e.preventDefault()
        const name = e.target.name.value;

        if (user) {
            user.user.displayName = name

        }
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setPassError('your password is not matched')
            return
        }
        setPassError('')
        if (error) {
            error.message = ''
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-10 col-md-4 col-lg-3  mt-5 px-md-3 pb-2 rounded' style={{ marginBottom: '100px', backgroundColor: 'gray' }}>

                    <h4 className='text-center py-2 text-white'>SignUp</h4>
                    <form onSubmit={newUserHandle}>
                        <input type="text" name='name' class="form-control mb-2" aria-describedby="emailHelp" placeholder="Enter Your Name" />

                        <input type="email" name='email' class="form-control mb-2" aria-describedby="emailHelp" placeholder="Enter email" required />

                        <input type="password" name='password' class="form-control mb-2" placeholder="Password" required />
                        <input type="password" name='confirmPassword' class="form-control" placeholder="Confirm Password" required />

                        <p className='text-white mb-0 mt-2'>Already Account? Please <Link to='/sign-in' className='text-primary font-weight-bold'>SignIn</Link></p>

                        <button type="submit" class="btn btn-primary mt-3 mx-auto d-block">SignUp</button>
                        <p className='text-danger bg-white rounded'>{error?.message}{passError}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;