import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Snap | Blogs');
    return (
        <div className="my-lg-0 pb-sm-5 py-5 mt-5 mb-0 mt-md-0">
            <div>
                <h1 className="my-2 mt-lg-5 display-5 fw-semibold text-white">Blogs</h1>
                <hr className="col-7 col-lg-4 text-white mx-auto" />
                <p className='px-lg-0 px-3 fs-6 mb-1 mb-lg-5 text-white'>Here are few blog questions :</p>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-7 mx-auto" >
                    <Accordion.Item className="bg-dark" eventKey="0">
                        <Accordion.Header>Difference between SQL and NoSQL?</Accordion.Header>
                        <Accordion.Body className="bg-dark rounded text-start text-white fs-6"><strong>SQL </strong> :SQL databases are primarily called RDBMS or Relational Databases (it has relations with tables). SQL databases are table based databases. SQL databases have a predefined schema.<br />
                            <strong>NoSQL</strong> :NoSQL databases are primarily called as Non-relational or distributed database. NoSQL databases can be document based, key-value pairs, graph databases. NoSQL databases use dynamic schema for unstructured data.<br /></Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-7 mx-auto">
                    <Accordion.Item className="bg-dark" eventKey="0">
                        <Accordion.Header >What is JWT, and how does it work?</Accordion.Header>
                        <Accordion.Body className="bg-dark rounded text-white fs-6 text-start">JWT is mainly used for authorization purpose, not authentication. Securely transmits information between parties (like client-side to server-side) as a JSON object. Client logs in with username and password. Then Server creates token for client. Server sends the (Access token and Refresh token) token to the client. Client stores the token on either local storage or browser cookie. Next time the client makes a request, a copy of the (Access) token is sent to the server for authorization. Server verifies JWT signature before giving the authorization. Then Server responds to the client’s request.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-7 mx-auto">
                    <Accordion.Item className="bg-dark" eventKey="0">
                        <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                        <Accordion.Body className="bg-dark rounded text-white fs-6">Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3 my-md-3 py-md-0 col-11 col-md-7 mx-auto">
                    <Accordion.Item className="bg-dark" eventKey="0">
                        <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                        <Accordion.Body className="bg-dark rounded text-white fs-6">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div >
    );
};

export default Blogs;