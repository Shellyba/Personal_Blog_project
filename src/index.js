import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {Post} from "./pages/post";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
// import {Admin} from "./pages/admin";
import {App} from './App';



import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

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
                path: "/Contact",
                element: <Contact />,
            },

        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
