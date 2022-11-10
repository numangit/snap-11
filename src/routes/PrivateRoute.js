import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerComponent from '../components/SpinnerComponent/SpinnerComponent';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    // setting loader
    if (loading) {
        return <div className="spinner-border m-5" role="status">
            <SpinnerComponent></SpinnerComponent>
        </div>
    }

    if (!user) {
        return <Navigate to="/SigninPage/SigninPage" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;