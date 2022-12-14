import React, { useContext, useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('Snap | My reviews');
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([])

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch(`https://snap-server-11.vercel.app/myReviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('snap-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email])

    //delete handler
    const handleDelete = id => {
        const confirm = window.confirm('Please Confirm');
        if (confirm) {
            fetch(`https://snap-server-11.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        notify()
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    const notify = () => toast.success('Deleted Successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;

    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            <h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white">Your reviews</h1>
            <hr className="col-7 col-lg-4 text-white mx-auto" />

            {
                myReviews.length !== 0 ?
                    myReviews.map(review =>
                        <div key={review._id} className=" col-11 col-lg-8 my-2 mx-auto bg-glass-dark text-white p-2 p-lg-4 rounded-2">
                            <div className='d-flex'>
                                <div className="">
                                    <span className="fs-6 py-0 fw-bold ms-2 me-auto">{review.serviceName}</span>
                                </div>
                                <span className='ms-auto pt-3 pt-lg-0'>
                                    <Link to={`../MyReviews/UpdateReview/UpdateReview/${review._id}`}>
                                        <button className="btn btn-sm btn-outline-light fw-semibold" title='update review'><AiFillEdit /></button>
                                    </Link>
                                    <button onClick={() => handleDelete(review._id)} className=" ms-2 btn btn-sm text-white btn-outline-light fw-semibold" title='Delete review'><AiFillDelete /></button>
                                </span>
                            </div>
                            <hr className="border-5 text-white" />
                            <p className="py-0 text-start">{review.reviewDescription}</p>
                        </div>
                    ) :
                    <div className="py-3 py-lg-5">
                        <h1 className="my-5 display-5 fw-bold">No reviews were added</h1>
                    </div>
            }
        </div>
    );
};

export default MyReviews;
