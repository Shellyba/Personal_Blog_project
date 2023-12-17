// import './App.css';

import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";



export function App() {
    const [postsArray, setPostsArray] = useState([]);
    const addPost = (newPost) =>
        setPostsArray([...postsArray, newPost])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPostsArray(json))
    }, []);

    return (
    <div className="page">
        <Header/>
        <Outlet context={[postsArray]} />
        <Footer />
    </div>
  );
}

