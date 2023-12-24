import {useContext, useState} from "react";
import {PostsContext} from "../providers/posts-provider";
import {PostCard} from "../components/post_card";
import "../css/page.css";

/* This page will display all the blog posts (using the global component posts-provider
* and the useContext hook function). In addition, in this page the user can search a post by a search word.
* With every chang in the search word, the relevant posts will display. To get the search word with each change
* I'm using the "handleUserInput" function, and in order to update the UI I'm using the useState hook function. */
export function Posts() {

    const {postsArray} = useContext(PostsContext);
    const [searchWord, setSearchWord] = useState('');
    const handleUserInput = (event) => {
        setSearchWord(event.target.value);
    }

    return (
        <div className="page">
            <div className="hero">
                <div className="hero-header">
                    <div className="content-container">
                        <p className="title">Posts</p>
                        <form className="search-bar">
                            <input onChange={handleUserInput} type="text" placeholder=" Search post"
                                   className="form-control"/>
                        </form>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content-container">
                    {postsArray
                        .filter(post => post.title.toLowerCase().includes(searchWord.toLowerCase()))
                        .map((post) => <PostCard postItem={post}/>)}
                    <div className="section" id="daily-digest">
                        <div className="section-header"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}