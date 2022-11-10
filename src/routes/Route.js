import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Services from '../components/Services/Services';
import Blogs from '../components/Blogs/Blogs';
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateReview from "../components/MyReviews/UpdateReview/UpdateReview";
import AddService from "../components/AddService/AddService";
import SigninPage from "../components/SigninPage/SigninPage";
import SignUpPage from "../components/SignUpPage/SignUpPage";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            { path: 'blogs', element: <Blogs></Blogs> },
            { path: '/SigninPage/SigninPage', element: <SigninPage></SigninPage> },
            { path: '/SignUpPage/SignUpPage', element: <SignUpPage></SignUpPage> },
            // {
            //     path: 'services/:id',
            //     loader: async ({ params }) => {
            //         return fetch(`https://rise-server-assignment10.vercel.app/servicedetails/${params.id}`)
            //     },
            //     element: <ServiceDetails></ServiceDetails>
            // },
            {
                path: 'myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/MyReviews/UpdateReview/UpdateReview',
                element: <UpdateReview></UpdateReview>
            },
            {
                path: 'addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            }
        ])
    }

])