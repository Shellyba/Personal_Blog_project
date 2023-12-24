import {useParams} from "react-router-dom";
import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {PostCard} from "../components/post_card";
import "../css/page.css";
import "../css/postcard.css";
import "../css/post.css";


/* This page will display single post and posts that are related to the selected post (having the same category value).
Using the useContext hook function I have access to the blog posts array and the
function getPostById(from the global posts-provider component). In order to display the relevant posts I drill down each post
to the postCard component.*/

export function Post() {
    const {id} = useParams();
    const {postsArray, getPostById} = useContext(PostsContext);
    const postToDisplay = getPostById(id);

    return (
        <div className="page">
            {postToDisplay ? (
                <div>
                  <div className="hero-header">
                    <div className="content-container">
                        <p className="title post-title"> {postToDisplay.title}</p>
                        <p className="post-date"> {postToDisplay.date.split('-').reverse().join('-')}</p>
                        <img className="post-img" src="../Pictures/dogs1.jpeg" alt="picture"/>
                        <p className="subtitle"> {postToDisplay.body}</p>
                    </div>
                </div>
                <div className="content">
                    <div className="content-container">
                        <div className="section" id="daily-digest">
                            <div className="section-header">
                                <div className="section-title">Related posts</div>
                            </div>
                            <div>
                                {postsArray
                                    .filter(post => post.category === postToDisplay.category)
                                    .map(post => <PostCard postItem={post}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>) : (<div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)}
        </div>
    );
}


