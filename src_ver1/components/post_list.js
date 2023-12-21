import {PostCard} from "./post_card";

export function PostList({postslist}){
    return(
        <div>
            <h3>Post list</h3>
            <p> Here is a list of postcards:</p>
            {postslist.map((post) => <PostCard postItem = {post}/>)}
        </div>
    )
}