import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase-init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('')
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
        if (email && password) {
            signInWithEmailAndPassword(email, password)
        }

    }
    return (
        <div className="container">
            <div className='row justify-content-center '>
                <div className='col-10 col-md-4 col-lg-3 mt-5 px-md-3 pb-2 rounded ' style={{ marginBottom: '140px', backgroundColor: 'gray' }}>

                    <h4 className='text-center py-2 text-white'>SignIn</h4>
                    <form onSubmit={userHandle}>
                        <div className="form-group">

                            <input type="email" onBlur={(e) => setEmail(e.target.value)} name="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

                        </div>
                        <div className="form-group">

                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <p className='text-white mb-0 mt-2'>don't Account?Please <Link to='/sign-up' className='text-warning'>SignUp</Link></p>
                        <p className='text-white'>forget password<button onClick={() => {
                            if (email === "") {
                                alert('enter your email')
                                return
                            }
                            sendPasswordResetEmail(email)
                            toast('sent passowrd reset mail')
                        }} className='text-danger btn '> Reset</button></p>
                        <div className='row justify-content-center px-4 px-md-0 '>
                            <button type="submit" className="btn btn-primary mt-3 mb-2 mb-md-4 col-md-4 me-md-2">SignIn</button>
                            <p className="btn btn-primary mt-md-3 mb-4 col-md-6" onClick={() => signInWithGoogle()}>SignInWith <img width={30} src="https://i.ibb.co/D8wkS6r/download-removebg-preview-2.png" alt="" /></p>
                        </div>
                        <p className='text-danger bg-white rounded'>{error?.message}</p>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default SignIn;