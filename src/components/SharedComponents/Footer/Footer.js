import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
// import logo from '../TopNavigateBar/icons8-dove-50.png';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container text-center text-white d-lg-flex py-5 border-top">
                <div className="mx-auto flex-wrap px-3 py-2 py-lg-0 col-lg-8 px-lg-3">
                    <h4>About this webpsite</h4>
                    <hr className="my-1 d-lg-none" />
                    <hr className="d-none d-lg-block p-1" />
                    <p>Snap is a professional website of a photographer providing his services. It is a smooth and fast website connected with mongoDB. The website is desgined beautifully by keeping the colors simple.</p>
                    <p className="my-2 text-muted mx-auto">Follow us on:</p>
                    <div>
                        <Link className="mx-2 text-muted fs-3" to="/"><BsTwitter /></Link>
                        <Link className="mx-2 text-muted fs-3" to="/"><BsGithub /></Link>
                        <Link className="mx-2 text-muted fs-3" to="/"><BsInstagram /></Link>
                    </div>
                    <p className="mt-2 mb-0 text-muted mx-auto  d-none d-lg-block">Copyright © 2017–2022 Snap</p>
                </div>
            </div>
        </div >
    );
};

export default Footer;