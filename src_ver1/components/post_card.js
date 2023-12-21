export function PostCard({postItem}){
    return(
        <div>
            <h3> {postItem.title}</h3>
            <img src={postItem.picture} alt="picture"/>
            <p> {postItem.content}</p>
        </div>
    )
}