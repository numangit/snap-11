import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import camera from './56718-camera.json';
import { Link } from 'react-router-dom';
import TotalUserRatings from './TotalUserRatings/TotalUserRatings';
import Recommendation from './Recommendation/Recommendation';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/HomeServices")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
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
            <h2 className="text-center text-white fs-1 fw-bold"> Latest Services</h2>
            <hr className="text-white display-5" />
            <p className="fs-6 text-white">Check out my latest services. <br /> The latest services comes with 50% offer for the first 5 weeks.</p>
            {
                services.map(service => <div key={service.service_id} className="d-flex my-2 my-lg-4 col-11 col-lg-9 col-10 mx-auto  bg-trans text-white p-2 rounded-3">
                    <PhotoProvider>
                        <PhotoView src={service.picture}>
                            <img className="w-25 m-2 rounded" src={service.picture} alt="Card image" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className='mx-auto p-0 p-lg-2'>
                        <p className="fs-4 my-1 py-0 fw-bold text-warning">{service.name}</p>
                        <hr className="d-none d-sm-block my-2" />
                        <p className="d-none d-sm-block my-1 py-0 text-start">{service.description.slice(0, 100)}...</p>
                        <div className="d-lg-flex">
                            <span className="d-none d-sm-block py-0 me-auto">
                                <p className="my-2 py-0 " ><small>Price : $<span className="fw-semibold text-warning">{service.price}</span></small></p>
                            </span>
                            <span className='ms-auto pt-3 pt-lg-0'>
                                <Link className="my-2 py-0"
                                    to={`/services/${service._id}`}>
                                    <button className="btn bg-dark text-white btn-sm fw-bolder"> View Details</button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>)
            }
            <Link to='/services'><button className="mx-auto btn btn-dark">See All</button>
            </Link>
            <hr className="text-white display-5 mt-0 mt-lg-5" />
            <h2 className="text-center text-white fs-2 fw-bold">Annual Ratings</h2>
            <hr className="text-white display-5" />
            <div className='col-11 col-lg-8 bg-trans rounded-3 p-2 p-lg-5 mx-auto'>
                <TotalUserRatings></TotalUserRatings>
            </div>
            <hr className="text-white display-5 mt-0 mt-lg-5" />
            <h2 className="text-center text-white fs-2 fw-bold"> Add your suggestion</h2>
            <hr className="text-white display-5" />
            <div className="bg-glass-dark col-11 col-lg-8 mx-auto rounded-5 p-4 p-lg-5 bg-trans">
                <Recommendation></Recommendation>
            </div>
        </div >
    );
};

export default Home;