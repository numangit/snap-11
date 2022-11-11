import React, { useContext, useEffect, useState } from 'react';
import { BsFillCameraFill } from 'react-icons/bs';
import { RiCameraLensFill } from 'react-icons/ri';
import { MdOutlinePriceChange } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import { FaUserCircle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Snap | Service Details');
    const { user, loading, setLoading } = useContext(AuthContext);
    const { _id, name, price, lens, camera, picture, description } = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState();
    // const [currentServiceReviews, setCurrentServiceReviews] = useState(serviceReviews);
    console.log(serviceReviews)


    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/serviceReviews?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                setServiceReviews(data);
                setLoading(false);
            })
    }, [_id, setLoading])

    const handleReview = event => {
        event.preventDefault();
        const reviewDescription = event.target.review.value;
        const serviceName = name;
        const userName = user?.displayName || 'unknown';
        const image = user?.photoURL;
        const email = user?.email || 'unregistered';

        const review = {
            service: _id,
            serviceName,
            name: userName,
            image,
            reviewDescription: reviewDescription,
            email
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            < h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white" > Service Deatils</h1 >
            <hr className="col-7 col-lg-4 text-white mx-auto" />
            {/* service details section  */}
            <div>
                <div>
                    <div className="d-flex my-2 my-lg-2 col-11 col-lg-9 col-10 mx-auto  bg-glass-dark text-white p-2 rounded-3">
                        <img className="d-none d-sm-block w-50 m-2 rounded img-fluid" src={picture} alt="" />
                        <div className='mx-auto p-4'>
                            <div className="d-lg-flex">
                                <span className="fs-4 py-0 fw-bold me-auto">{name}</span>
                            </div>
                            <hr className="d-none d-sm-block" />
                            <p className="py-0 text-start">Description :</p>
                            <p className="py-0 text-start">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-trans text-white my-2 my-lg-3 col-11 col-lg-9 mx-auto p-2 rounded-3 d-lg-flex">
                    <div className="text-start col-11 col-lg-6 p-4">
                        <p className="text-center fs-4 fw-semibold">Camera Details</p>
                        <hr className="text-Muted" />
                        <span className='d-flex'><BsFillCameraFill className="mt-1 fs-5" />
                            <p className="ms-1 p-0">{camera}</p>
                        </span>
                        <span className='d-flex'><RiCameraLensFill className="mt-1 fs-5" />
                            <p className="ms-1 p-0">{lens}</p>
                        </span>
                    </div>
                    <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                    <div className="text-start col-11 col-lg-6 p-4">
                        <p className="text-center fs-4 fw-semibold">Details</p>
                        <hr />
                        <p><small className="text-light"><MdOutlinePriceChange /> Price :</small> $ {price}</p>
                        <Link to={`../`} className='mx-auto'><button className="btn w-100 btn-outline-light fw-semibold my-2">Book Now</button></Link>
                    </div>
                </div>
            </div>
            {/* review section  */}
            <div className="col-11 col-lg-9 mx-auto">
                <h4 className="my-2 my-lg-5 fs-2 text-start ms-2 ms-lg-5 ps-lg-5 fw-semibold text-white">Reviews :</h4>
                <div className="bg-trans p-5 rounded-3">
                    {/* review card */}
                    {
                        loading ? <SpinnerComponent></SpinnerComponent>
                            : serviceReviews?.map(review =>
                                <div key={review._id} className="my-2 mx-auto bg-glass-dark text-white p-2 p-lg-4 rounded-2">
                                    <div className='d-flex'>
                                        <div className="">
                                            {
                                                review.image ?
                                                    <img className="rounded-circle w-10 mx-2" src={review.image} alt="" />
                                                    : <FaUserCircle className="fs-3 text-white" title={user?.displayName} />
                                            }
                                            <span className="fs-6 py-0 fw-bold ms-2 me-auto">{review.name}</span>
                                        </div>
                                    </div>
                                    <hr className="border-5 text-white" />
                                    <p className="py-0 text-start">{review.reviewDescription}</p>

                                </div>)
                    }
                    {/* conditional comment section  */}
                    <div className='p-2'>
                        {
                            user?.uid ?
                                <form onSubmit={handleReview}>
                                    <div className="form-floating text-dark fs-6 my-2">
                                        <textarea name="review" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3" ></textarea>
                                        <label htmlFor="floatingInput">Add Review</label>
                                        <button className="w-100 btn btn-sm btn-primary mt-2 text-white" type="submit">Add Review</button>
                                    </div>
                                </form> :
                                <div className='my-2 my-lg-4 '>
                                    <h1 className="text-dark fs-4 fw-semibold ">Please Signin to add a review. <Link to="/SigninPage/SigninPage">Sign In</Link></h1>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;