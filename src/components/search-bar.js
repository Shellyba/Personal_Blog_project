import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {PostsContext} from "../providers/posts-provider";
import {PostCard} from "./post_card";
import "../css/page.css";

export function SearchBar(){
    const {postsArray} = useContext(PostsContext);
    const [searchWord, setSearchWord] = useState('');

    // const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const handleUserInput = (event) => {
        setSearchWord(event.target.value);
    }
        // const {title, body} = event.target.elements;
        // const {picture} = URL.createObjectURL(event.target.files[0]);

    return(

        <div className="page">
            <div className="hero-header">
                <div className="content-container">
                    <form className="search-bar" >
                        <input onChange={handleUserInput} type="text"  placeholder=" Search"  className="form-control" />
                    </form>
                </div>
            </div>
            <div className="content">
                {postsArray
                    .filter(post => post.title.toLowerCase().includes(searchWord.toLowerCase()))
                    .map((post) => <PostCard postItem={post}/>)
                }
                <div className="content-container">
                    <div className="section" id="daily-digest">
                        <div className="section-header">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //
        // <form className="search-bar" >
        //     <input onChange={handleUserInput} type="text"  placeholder=" Search"  className="form-control" />
        // </form>
        //
        // {postsArray
        //     .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        //     .map((post) => <PostCard postItem={post}/>)
        // }
        // </div>

)
}

