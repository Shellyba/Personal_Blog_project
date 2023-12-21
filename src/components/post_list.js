import {PostCard} from "./post_card";
import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";

export function PostList(){

    const {postsArray} = useContext(PostsContext);

    return(
        <div>
            {postsArray.map((post) => <PostCard postItem = {post}/>)}
        </div>
    )
}