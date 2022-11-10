import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const UpdateReview = () => {
    return (
        <div className="my-lg-5 pb-sm-5 py-5 py-lg-2 mt-5 mb-0 mt-md-0">
            <h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white">Your reviews</h1>
            <hr className="col-7 col-lg-4 text-white mx-auto" />
            <div className="col-11 col-lg-10 mx-auto">
                <table class="table table-dark rounded-5">
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Review</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><AiFillDelete /></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateReview;