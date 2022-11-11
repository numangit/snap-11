import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';

const UpdateReview = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [services, setServices] = useState([]);

    useTitle('Snap | Services');
    useEffect(() => {
        setLoading(true);
        fetch("https://snap-server-11.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [setLoading])

    // setting loader
    if (loading) {
        return <div className="spinner-border m-5" role="status">
            <SpinnerComponent></SpinnerComponent>
        </div>
    }

    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            <h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white">Services</h1>
            <hr className="col-7 col-lg-4 text-white mx-auto" />
            {
                services.map(service => <div key={service._id} className="d-flex my-2 my-lg-4 col-11 col-lg-9 col-10 mx-auto  bg-trans text-white p-2 rounded-3">
                    <PhotoProvider>
                        <PhotoView src={service.picture}>
                            <img className="w-25 m-2 rounded" src={service.picture} alt="" />
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
                                    <button className="btn bg-dark text-white btn-sm fw-bolder">View Details</button>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default UpdateReview;