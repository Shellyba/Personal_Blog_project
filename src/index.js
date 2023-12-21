import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import {PostProvider, PostsContext} from "./providers/posts-provider";
import {UserProvider} from "./providers/user-provider";
import {EditPost} from "./components/edit_post_form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/posts/:id",
                element: <Post />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/edit-post/:id",
                element: <EditPost />,
            },

        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProvider>
            <PostProvider>
                <RouterProvider router={router} />
            </PostProvider>
        </UserProvider>
    </React.StrictMode>
);
