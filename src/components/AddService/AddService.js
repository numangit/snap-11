import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Snap | Add Services');
    // adding service data
    const handleAddService = event => {
        event.preventDefault();
        const serviceName = event.target.name.value;
        const price = event.target.price.value;
        const camera = event.target.camera.value;
        const lens = event.target.lens.value;
        const serviceDescription = event.target.description.value;
        const servicePicture = event.target.photoUrl.value;

        const newService = {
            name: serviceName,
            price,
            camera,
            lens,
            description: serviceDescription,
            picture: servicePicture
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="my-5 pt-5">
            <main className="col-11 col-lg-8 mx-auto p-4 rounded-4">
                <h1 className="my-2 display-5 fw-semibold text-white">Add Service</h1>
                <hr className="col-7 col-lg-4 text-white mx-auto" />
                <p className="text-white mb-3 fs-6 ">Create a new service</p>
                <form onSubmit={handleAddService} >
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="name" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Service Name</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="price" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Service Price</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="camera" className="form-control" id="floatingCameraInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingCameraInput">Camera Name</label>
                    </div>
                    <div className="form-floating text-dark fs-6 my-2">
                        <input type="text" name="lens" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Lens Name</label>
                    </div>
                    {/* <div className="form-floating text-dark fs-6 my-2">
                        <input type="time" name="time" className="form-control" id="floatingTimeInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingTimeInput">Current Time (hh:mm)</label>
                    </div> */}
                    <div className="form-floating text-dark fs-6 my-2">
                        <textarea name="description" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3" ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div className="form-floating text-dark fs-6">
                        <input type="url" name="photoUrl" className="form-control" id="floatingUrl" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Photo URL</label>
                    </div>
                    <button className="col-10 col-lg-6 btn btn-lg bg-dark mt-2 text-white" type="submit">Add service</button>
                </form>
            </main>
        </div>
    );
};

export default AddService;