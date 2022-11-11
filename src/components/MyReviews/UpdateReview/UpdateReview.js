import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateReview = () => {
    const { _id, reviewDescription } = useLoaderData();

    //update handler
    const handleUpdate = event => {
        event.preventDefault();
        const reviewDescription = event.target.review.value;

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewDescription })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    notify()
                }
            })
    }

    const notify = () => toast.success('Updated Successfully', {
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
        <div className="my-lg-3 pb-sm-5 py-5 mt-5 mb-0 mt-md-0">
            <main className="col-11 col-lg-8 mx-auto p-4 rounded-4">
                <form onSubmit={handleUpdate} >
                    <h1 className="mb-2 fw-normal text-white">Update your review</h1>
                    <p className="text-white mb-3 fs-6 ">feel free to make changes.</p>
                    <div className="text-dark fs-6 my-2">
                        <textarea name="review" className="form-control" id="floatingInput" placeholder="name@example.com" defaultValue={reviewDescription} required rows="3"></textarea>
                    </div>
                    <button className="w-50 btn btn-lg bg-dark mt-2 text-white" type="submit">Update</button>
                </form>
            </main>
        </div>
    );
};

export default UpdateReview;