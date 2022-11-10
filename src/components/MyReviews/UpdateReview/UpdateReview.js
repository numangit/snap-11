import React from 'react';

const UpdateReview = () => {
    return (
        <div className="my-lg-0 pb-sm-5 py-5 mt-5 mb-0 mt-md-0">
            <main className="col-11 col-lg-8 mx-auto p-4 rounded-4">
                <form >
                    <h1 className="mb-2 fw-normal text-white">Update your review</h1>
                    <p className="text-white mb-3 fs-6 ">feel free to make changes.</p>
                    <div className="form-floating text-dark fs-6 my-2">
                        <textarea name="description" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3"></textarea>
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <button className="w-50 btn btn-lg bg-dark mt-2 text-white" type="submit">Update</button>
                </form>
            </main>
        </div>
    );
};

export default UpdateReview;