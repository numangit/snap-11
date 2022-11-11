import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import camera from '../Home/56718-camera.json';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SigninPage = () => {
    useTitle('Snap | Signin');
    const { setUser, loginUser, googleSignin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //handle submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setLoading(false);
                e.target.reset();
                const currentUser = { email: user.email }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('snap-token', data.token);
                        navigate(from, { replace: true });
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // signin with google handler function
    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);
                const currentUser = { email: user.email }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('snap-token', data.token);
                        navigate(from, { replace: true });
                    });
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className="my-5 py-5 d-flex">
            <div className='w-50 mx-auto d-none d-lg-block'>
                <Lottie animationData={camera} loop={true} />
            </div>
            <main className="col-11 col-lg-4 my-5 mx-auto bg-glass-dark text-white p-4 rounded-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-2 fw-normal">Sign in</h1>
                    <p className="text-muted mb-3 fs-6 ">Welcome back!</p>
                    <div className="form-floating text-dark fs-6">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-3">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="my-3 w-100 d-flex">
                        <label className=''>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        <p className='ms-auto my-0 text-end text-muted' >Forgot Password</p>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                    <hr className='my-4' />
                </form>
                <p className='px-3 my-0 text-sm dark:text-gray-400'>Sign in with social accounts</p>
                <div className='p-3 fs-5'>
                    <button onClick={handleGoogleSignin} className="w-50 btn btn-outline-light"><FaGoogle /> Google</button>
                </div>
                <p className='text-center text-muted'>
                    New member ?{' '}
                    <Link to='../SignUpPage/SignUpPage' className=''>
                        Sign up
                    </Link>
                    .
                </p>
            </main>
        </div >
    );
};

export default SigninPage;