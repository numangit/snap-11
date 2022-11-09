import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Services from '../components/Services/Services';
import Blogs from '../components/Blogs/Blogs';
import Signin from '../components/Signin/Signin';
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateReview from "../components/MyReviews/UpdateReview/UpdateReview";
import AddService from "../components/AddService/AddService";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            { path: 'signin', element: <Signin></Signin> },
            // {
            //     path: 'services/:id',
            //     loader: async ({ params }) => {
            //         return fetch(`https://rise-server-assignment10.vercel.app/servicedetails/${params.id}`)
            //     },
            //     element: <ServiceDetails></ServiceDetails>
            // },
            {
                path: 'myReviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: 'updateReview',
                element: <UpdateReview></UpdateReview>
            },
            {
                path: 'addService',
                element: <AddService></AddService>
            }
        ])
    }

])