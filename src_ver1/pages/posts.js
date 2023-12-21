import {PostList} from "../components/post_list";
export function Posts({postsArr}){
    return(
       <div>
            <h3>Posts number: {postsArr.length}</h3>
           <p>Here is a list of my posts:</p>
           <PostList postslist={postsArr}/>
           <button>Load more</button>
       </div>
    )
}