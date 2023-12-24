import {Link, ScrollRestoration} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../providers/user-provider";
import {PostsContext} from "../providers/posts-provider";
import "../css/postcard.css";


/* The component display a postcard with the information of the drilled down post (postItem).
   also, it displays remove and edit buttons when the user is signedIn (getting the information from
   the user-provider global component using the useContext hook function).
 */
export function PostCard({postItem}) {
    const {user} = useContext(UserContext);
    const {removePost} = useContext(PostsContext);

    return (
        <div className="article-card flex-md-row flex-column">
            <ScrollRestoration/>
            <div className="card-content">
                <div className="card-date"> {postItem.date && postItem.date.split('-').reverse().join('-')}</div>
                <Link className="card-title" to={`/posts/${postItem.id}`}>{postItem.title}</Link>
                <div className="card-subtitle"> {postItem.body}</div>
            </div>
            <div className="card-image">
                <img className="card-image" src="../Pictures/dogs1.jpeg" alt="picture"/>
            </div>
            {user && <>
                <button className="removeButton" onClick={() => removePost(postItem.title)}><i
                    className="bi bi-trash"></i></button>
                <Link className="editButton" to={`/edit-post/${postItem.id}`}><i className="bi bi-pencil"></i></Link>
            </>}
        </div>
    );
}




