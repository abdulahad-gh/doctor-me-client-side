import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user || userGoogle) {
        navigate(from, { replace: true });
    }
    const userHandle = e => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-25 mx-auto mt-5 px-5 pb-2 rounded' style={{ marginBottom: '140px', backgroundColor: 'gray' }}>

            <h4 className='text-center py-2 text-white'>SignIn</h4>
            <form onSubmit={userHandle}>
                <div className="form-group">

                    <input type="email" name="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group">

                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <p className='text-white mb-0 mt-2'>don't Account?Please <Link to='/sign-up' className='text-warning'>SignUp</Link></p>
                <p className='text-white'>forget password<Link to='/' className='text-danger'> Reset</Link></p>
                <div className='d-flex gap-2'>
                    <button type="submit" className="btn btn-primary mt-3 mb-4">SignIn</button>
                    <p className="btn btn-primary mt-3 mb-4" onClick={() => signInWithGoogle()}>SignInWithGoogle</p>
                </div>
                <p className='text-danger bg-white rounded'>{error?.message}</p>
            </form>

        </div>
    );
};

export default SignIn;