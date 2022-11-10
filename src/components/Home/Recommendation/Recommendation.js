import React from 'react';

const Recommendation = () => {
    return (
        <div>
            <p className='text-center fs-5'>Recommend your taste</p>
            <div className="form-floating text-dark fs-6 my-2">
                <input name="description" className="form-control" id="floatingInput" placeholder="name@example.com" required rows="3"></input>
                <label htmlFor="floatingInput">Description</label>
            </div>
            <button className="w-50 btn btn-lg btn-dark mt-2 text-white" type="submit">Add suggestion</button>
        </div>
    );
};

export default Recommendation;