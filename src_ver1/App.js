// import './App.css';

import {Header} from "./components/header";
import {Home} from "./pages/home";
import {Posts} from "./pages/posts";
import {Post} from "./pages/post";
import {About} from "./pages/about";
import {Contact} from "./pages/contact";
import {Admin} from "./pages/admin";
import {Footer} from "./components/footer";
import {useState} from "react";

export function App() {
    const [postsArray, setPostsArray] = useState([]);
    const [pageName, setPageName] = useState(["home"]);

    const addPost = (newPost) =>
    setPostsArray([...postsArray, newPost])

    return (
    <div>
        <Header changPageNamefunc = {setPageName}/>
        { pageName === 'home' && <Home /> }
        { pageName === 'posts' && <Posts postsArr = {postsArray}/> }
        { pageName === 'post' && <Post /> }
        { pageName === 'about' && <About /> }
        { pageName === 'contact' && <Contact /> }
        { pageName === 'admin' && <Admin addPostFunc={addPost}/>}
        <Footer />
    </div>
  );
}

