import {PostForm} from "../components/post_form";
import {useContext} from "react";
import {UserContext} from "../providers/user-provider";
import "../css/page.css";

/* This page enables the admin user to add post to the blog. The user information (if signed in/out)
is being accessed using the general component "user-provider" and the useContext hook function. I use
the PostForm component to display the adding post form. */

export function Admin() {
    const {user} = useContext(UserContext);

    return (
        <div className="page">
            <div className="hero-header">
                <div className="content-container">
                    <p className="title">Admin</p>
                    {!user ? <p className="subtitle">You must sign in to add a post</p> :
                        <div><p> Here is the form to update a post:</p>
                            <PostForm/>
                        </div>}
                </div>
            </div>
        </div>
    );
}

