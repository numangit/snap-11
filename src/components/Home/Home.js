import React from 'react';
import Lottie from "lottie-react";
import camera from './56718-camera.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="my-lg-0 pb-sm-5 mt-5 mb-0 mt-md-0">
            <div className="d-block align-items-center d-lg-flex flex-lg-row-reverse">
                <div className='w-50 mx-auto'><Lottie animationData={camera} loop={true} /></div>
                <div className="mx-auto p-3 p-md-4 text-white">
                    <h1 className='display-1 fw-semibold m-0'>SNAP SNAP!!</h1>
                    <hr />
                    <p className='fs-4 mt-3 mt-sm-4'>Capture every beautiful moments.</p>
                </div>
            </div>
            <hr className="text-white display-5 mt-0 mt-lg-5" />
            <h2 className="text-center text-white fs-2 fw-bold"> Latest Services</h2>
            <hr className="text-white display-5" />

            <div className="d-flex my-2 my-lg-4 col-11 col-lg-9 col-10 mx-auto  bg-glass-dark text-white p-2 rounded-3">
                <img className="w-25 m-2 rounded" src="https://photographylife.com/wp-content/uploads/2010/09/Nikon-85mm-f1.4G-Image-Sample-31-1536x1025.jpg" alt="Card image" />
                <div className='mx-auto p-0 p-lg-2'>
                    <p className="fs-4 my-1 py-0 fw-bold">Wedding Photography</p>
                    <hr className="d-none d-sm-block my-2" />
                    <p className="d-none d-sm-block my-1 py-0 text-start">One of the most important events in many people’s lives is a wedding, and that means wedding photographers have a huge responsibility. Not only do wedding photographers need to have good camera and lighting skills, but they also must know how to work with people and capture the right emotions almost effortlessly. This is a difficult type of photography to practice, and you only get one chance to do it right, so I have a lot of respect for good wedding photographers.</p>
                    <div className="d-lg-flex">
                        <span className="d-none d-sm-block py-0 me-auto">
                            <p className="my-2 py-0 " ><small><span className="fw-semibold text-muted">NIKON D800E +</span></small></p>
                        </span>
                        <span className='ms-auto pt-3 pt-lg-0'>
                            <Link className="my-2 py-0"
                                to='/'>
                                <button className="btn bg-white btn-sm fw-bolder">Details</button>
                            </Link>
                        </span>
                    </div>
                </div>
                <hr className="text-white display-5 mt-0 mt-lg-5" />
                <h2 className="text-center text-white fs-2 fw-bold"> Add your suggestion</h2>
                <hr className="text-white display-5" />
            </div>
        </div >
    );
};

export default Home;