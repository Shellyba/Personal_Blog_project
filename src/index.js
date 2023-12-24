import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {Post} from "./pages/post";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Admin} from "./pages/admin";
import {App} from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {PostProvider} from "./providers/posts-provider";
import {UserProvider} from "./providers/user-provider";
import {EditPost} from "./components/edit_post_form";


//Using the react router in order to create an application with multiple page routes.
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/posts",
                element: <Posts/>,
            },
            {
                path: "/posts/:id",
                element: <Post/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/admin",
                element: <Admin/>,
            },
            {
                path: "/edit-post/:id",
                element: <EditPost/>,
            },

        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


// Using global provider components to have access to all posts and user information and functions from each page
root.render(
    <React.StrictMode>
        <UserProvider>
            <PostProvider>
                <RouterProvider router={router}/>
            </PostProvider>
        </UserProvider>
    </React.StrictMode>
);
