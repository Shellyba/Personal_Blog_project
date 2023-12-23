import {Link} from "react-router-dom";
import "../css/postcard.css";
import {useContext} from "react";
import {UserContext} from "../providers/user-provider";
import {PostsContext} from "../providers/posts-provider";

export function PostCard({postItem}) {
    const {user} = useContext(UserContext);
    const {removePost} = useContext(PostsContext);

    return (
        <div className="article-card flex-md-row flex-column">
            <div className="card-content">
                <div className="card-date"> {postItem.date && postItem.date.split('-').reverse().join('-')}</div>
                <Link className="card-title" to={`/posts/${postItem.id}`}>{postItem.title}</Link>
                <div className="card-subtitle"> {postItem.body}</div>
            </div>
            <div className="card-image">
                <img src="./Pictures/dogs1.jpeg" alt="picture"/>
            </div>
            {user &&
                <>
                    <button className="removeButton" onClick={() => removePost(postItem.title)}> <i className="bi bi-trash"></i> </button>
                    <Link className="editButton"  to={`/edit-post/${postItem.id}`}><i className="bi bi-pencil"></i></Link>
                </>
            }
        </div>
    )
}




