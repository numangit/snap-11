import React from 'react';
import Lottie from "lottie-react";
import camera from './56718-camera.json';

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
        </div >
    );
};

export default Home;