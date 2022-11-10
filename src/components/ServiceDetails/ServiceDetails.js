import React from 'react';
import { BsFillCameraFill } from 'react-icons/bs';
import { RiCameraLensFill } from 'react-icons/ri';
import { MdOutlinePriceChange } from 'react-icons/md';
import { Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const ServiceDetails = () => {
    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            < h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white" > Service Deatils</h1 >
            <hr className="col-7 col-lg-4 text-white mx-auto" />
            <div>
                <div>
                    <div className="d-flex my-2 my-lg-2 col-11 col-lg-9 col-10 mx-auto  bg-trans text-white p-2 rounded-3">
                        <img className="w-50 m-2 rounded" src="https://photographylife.com/wp-content/uploads/2021/04/Nikon-Z7-II-1536x1083.jpg" alt="Card image" />
                        <div className='mx-auto p-4'>
                            <div className="d-lg-flex">
                                <span className="fs-4 py-0 fw-bold me-auto">Photography</span>
                            </div>
                            <hr className="d-none d-sm-block" />
                            <p className="d-none d-sm-block py-0 text-start">Description :</p>
                            <p className="d-none d-sm-block  py-0 text-start">Another branch of commercial photography is product photography, where you are typically shooting in a studio with careful lighting to accentuate the product in question (though sometimes outdoors or on location). In the same way as commercial portraiture, a product photographer’s goal is to match the vision of the company in question. An outdoor brand will have different needs from a high-end lifestyle company, even if both sell the same underlying type of product, such as clothing or backpacks.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-trans text-white my-2 my-lg-3 col-11 col-lg-9 mx-auto p-2 rounded-3 d-lg-flex">
                    <div className="text-start col-11 col-lg-6 p-4">
                        <p className="text-center fs-4 fw-semibold">Camera Details</p>
                        <hr className="text-Muted" />
                        <span className='d-flex'><BsFillCameraFill className="mt-1 fs-5" />
                            <p className="ms-1 p-0">NIKON</p>
                        </span>
                        <span className='d-flex'><RiCameraLensFill className="mt-1 fs-5" />
                            <p className="ms-1 p-0">4000mm lense</p>
                        </span>
                    </div>
                    <div className="vr d-none d-lg-block col-lg-1 mx-auto"></div>
                    <div className="text-start col-11 col-lg-6 p-4">
                        <p className="text-center fs-4 fw-semibold">Details</p>
                        <hr />
                        <p><small className="text-light"><MdOutlinePriceChange /> Price :</small> $ 55</p>
                        <Link to={`../`} className='mx-auto'><button className="btn w-100 btn-outline-light fw-semibold my-2">Book Now</button></Link>
                    </div>
                </div>
            </div>
            {/* review section  */}
            <div className="col-11 col-lg-9 mx-auto">
                <h4 className="my-2 my-lg-5 fs-2 text-start ms-2 ms-lg-5 ps-lg-5 fw-semibold text-white">Reviews :</h4>
                <div className="bg-trans p-5 rounded-3">
                    {/* review card */}
                    <div className="d-flex my-2 mx-auto bg-glass-dark text-white p-2 rounded-2">
                        <div className='mx-auto p-4'>
                            <div className="d-lg-flex">
                                {/* {
                                    user?.pictur? then div : icon
                                   } */}
                                <img className="w-10 rounded-circle" src="https://yt3.ggpht.com/ytc/AMLnZu-QHJPJL38XCYs6Zj8Fq2LytPQlDdZEKAdCatuhTw=s900-c-k-c0x00ffffff-no-rj" alt="" />
                                <span className="fs-5 py-0 fw-bold ms-2 me-auto">UserName</span>
                            </div>
                            <hr className="d-none d-sm-block" />
                            <p className="d-none d-sm-block  py-0 text-start">Another branch of commercial photography is product photography, where you are typically shooting in a studio with careful lighting to accenth sell the same underlying type of product, such as clothing or backpacks.</p>
                        </div>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <textarea name="description" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3" ></textarea>
                        <label htmlFor="floatingInput">Add Review</label>
                        {/* {
                            if user there then add comment or send log in
                        } */}
                        <button className="ms-auto btn btn-sm btn-primary mt-2 text-white" type="submit">Add Review</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;