import { FaGoogle, } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import camera from '../Home/56718-camera.json';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUpPage = () => {
    useTitle('Snap | Signup');

    const { createUser, setUser, updateUserProfile, googleSignin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    //handler submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const photo = e.target.photoUrl.value;
        const name = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserName(name, photo);
                setUser(user);
                setLoading(false);
                e.target.reset();
                const currentUser = { email: user.email }
                fetch('https://snap-server-11.vercel.app/jwt', {
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
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    // set username and photo
    const updateUserName = (name, photo) => {
        updateUserProfile(name, photo)
            .then(() => {
                console.log('Profile Updated')
            }).catch((error) => {
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
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className="my-5 py-5 d-flex">
            <main className="col-11 col-lg-4 my-5 mx-auto bg-glass-dark text-white p-4 rounded-4">
                <form onSubmit={handleSubmit}>
                    <h1 className="mb-2 fw-normal">Sign Up</h1>
                    <p className="text-muted mb-3 fs-6 ">Create a new account</p>
                    <div className="form-floating text-dark fs-6">
                        <input type="url" name="photoUrl" className="form-control" id="floatingUrl" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Photo URL</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="fullName" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating text-dark fs-6">
                        <input type="email" name="email" className="form-control" id="floatingEmailInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingEmailInput">Email address</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="my-3 w-100 d-flex">
                        <label className=''>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        <p className='ms-auto my-0 text-end text-muted' >Forgot Password</p>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign up</button>
                    <hr className='my-4' />
                </form>
                <p className='px-3 my-0 text-sm dark:text-gray-400'>Sign up with social accounts</p>
                <div className='p-3 fs-5'>
                    <button onClick={handleGoogleSignin} className="w-50 btn btn-outline-light"><FaGoogle /> Google</button>
                </div>
                <p className='text-center text-muted'>
                    Already Have an account ?{' '}
                    <Link to='../SigninPage/SigninPage' className=''>
                        Sign in
                    </Link>
                    .
                </p>
            </main>
            <div className='w-50 mx-auto d-none d-lg-block'>
                <Lottie animationData={camera} loop={true} />
            </div>
        </div >
    );
};

export default SignUpPage;