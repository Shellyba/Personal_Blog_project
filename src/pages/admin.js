import {PostForm} from "../components/post_form";
import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {UserContext} from "../providers/user-provider";
// import {SearchBar} from "../components/search-bar";
// import {PostList} from "../components/post_list";

import "../css/page.css";
import {useParams} from "react-router-dom";

export function Admin(){
    const {user} = useContext(UserContext);

    return (
        <div className="page">
                <div className="hero-header">
                    <div className="content-container">
                        <p className="title" >Admin</p>
                        {!user ? <p className="subtitle">You must sign in to add a post</p>
                            : <div><p> Here is the form to update a post:</p>
                                <PostForm /></div>
                        }
                    </div>
                </div>
        </div>

    )
}

