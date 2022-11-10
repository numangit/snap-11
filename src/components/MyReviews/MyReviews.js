import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const UpdateReview = () => {
    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            <h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white">Your reviews</h1>
            <hr className="col-7 col-lg-4 text-white mx-auto" />
            <div className="col-11 col-lg-10 mx-auto">
                <div className="d-flex my-2 mx-auto bg-glass-dark text-white p-2 rounded-2">
                    <div className='mx-auto p-4'>
                        <div className="d-lg-flex">
                            <span className="fs-5 py-0 fw-bold ms-2 me-auto">Service Name</span>
                            <span className='ms-auto pt-3 pt-lg-0'>
                                <Link to="../MyReviews/UpdateReview/UpdateReview">
                                    <button className="btn btn-sm btn-outline-light fw-semibold">Update <AiFillEdit /></button>
                                </Link>
                                <button className=" ms-1 btn btn-sm text-white btn-outline-light fw-semibold"><AiFillDelete /></button>
                            </span>
                        </div>
                        <hr className="d-none d-sm-block" />
                        <p className="d-none d-sm-block  py-0 text-start">Another branch of commercial photography is product photography, where you are typically shooting in a studio with careful lighting to accenth sell the same underlying type of product, such as clothing or backpacks.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;