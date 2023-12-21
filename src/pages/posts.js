import {PostList} from "../components/post_list";
import {useContext, useEffect, useState} from "react";
import {SearchBar} from "../components/search-bar";
import {useOutletContext} from "react-router-dom";
import "../css/page.css";
// import "../css/search_bar.css";
import {PostsContext} from "../providers/posts-provider";
import {PostCard} from "../components/post_card";

export function Posts() {

    const {postsArray} = useContext(PostsContext);
    const [searchWord, setSearchWord] = useState('');

    // const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const handleUserInput = (event) => {
        setSearchWord(event.target.value);
    }
    // const {title, body} = event.target.elements;
    // const {picture} = URL.createObjectURL(event.target.files[0]);

    return (

        <div className="page">
            <div className="hero-header">
                <div className="content-container">
                    <p className="title" >Posts</p>
                    <form className="search-bar">
                        <input onChange={handleUserInput} type="text" placeholder=" Search post" className="form-control"/>
                    </form>
                </div>
            </div>
            <div className="content">
                <div className="content-container">
                    {postsArray
                        .filter(post => post.title.toLowerCase().includes(searchWord.toLowerCase()))
                        .map((post) => <PostCard postItem={post}/>)
                    }
                    <div className="section" id="daily-digest">
                        <div className="section-header">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}