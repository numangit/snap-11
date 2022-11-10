import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../favicon.ico';
import './Header.css';

const Header = () => {
    const { signoutUser, user, setUser } = useContext(AuthContext);

    //handler signout function
    const handleSignOut = () => {
        signoutUser()
            .then(() => { setUser(null) })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <div>
            <Navbar className="navbar navbar-expand-lg fixed-top" bg="" expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <img className="w-25" src={logo} alt="" />
                        <span className='fw-bolder fs-3'>Snap</span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-6  bg-trans p-2 rounded-pill text-white">
                            <ul className="navbar-nav ">
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} aria-current="page" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} aria-current="page" to="services">Services</NavLink>
                                </li>
                                {
                                    user?.uid &&
                                    <li className="nav-item text-center mx-lg-2">
                                        <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} to="myReviews">My Reviews</NavLink>
                                    </li>
                                }
                                {
                                    user?.uid &&
                                    <li className="nav-item text-center mx-lg-2">
                                        <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} to="addService">Add Service</NavLink>
                                    </li>
                                }
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} to="blogs">Blogs</NavLink>
                                </li>
                                <div className="vr d-none d-lg-block col-lg-1 mx-auto text-dark"></div>
                                {
                                    user?.uid ?
                                        <li className="nav-item text-center mx-lg-2">
                                            <button onClick={handleSignOut} className='btn'>Logout</button>
                                        </li> :
                                        <li className="nav-item text-center mx-lg-2">
                                            <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'fw-semibold nav-link'} to="/SigninPage/SigninPage">Singin</NavLink>
                                        </li>
                                }
                            </ul>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar >
        </div >
    );
};

export default Header;