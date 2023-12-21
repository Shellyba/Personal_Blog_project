import {PostForm} from "../components/post_form";

export function Admin({addPostFunc}){
    return(
        <div>
            <h3> Admin</h3>
            <p> Here is the form to update a post:</p>
            <PostForm addPostFunc = {addPostFunc}/>
        </div>
    )
}