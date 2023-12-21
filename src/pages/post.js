import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import "../css/page.css";
import "../css/post.css";
import {PostsContext} from "../providers/posts-provider";


export function Post(){
    const { id } = useParams();
    const {getPostById} = useContext(PostsContext);


    const postToDisplay = getPostById(id);



    //
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(response => response.json())
    //         .then(json => setPost(json))
    // }, []);

    return(

        <div>
            {post ? (
                <div>
                    <div className="hero-header">
                        <div className="content-container">
                            <p className="title"> {postToDisplay.title}</p>
                            <p className="post-date"> postToDisplay.date</p>
                            <img className="post-img" src="../Pictures/dogs1.jpeg" alt="picture"/>
                            <p className="subtitle"> {postToDisplay.body}</p>
                        </div>
                    </div>
                </div>) :
                (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
        </div>
    )
}
