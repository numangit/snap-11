import React from 'react';

const AddService = () => {
    return (
        <div className="my-5 pt-5">
            <main className="col-11 col-lg-8 mx-auto p-4 rounded-4">
                <form >
                    <h1 className="mb-2 fw-normal text-white">Add Service</h1>
                    <p className="text-white mb-3 fs-6 ">Create a new service</p>
                    <div className="form-floating text-dark fs-6">
                        <input type="url" name="photoUrl" className="form-control" id="floatingUrl" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Photo URL</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="fullName" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Service Name</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="number" name="price" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Price</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <textarea name="description" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3" ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <button className="col-10 col-lg-6 btn btn-lg bg-dark mt-2 text-white" type="submit">Add service</button>
                </form>
            </main>
        </div>
    );
};

export default AddService;