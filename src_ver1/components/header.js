export function Header({changPageNamefunc}){
    return(
        <div>
            <h1>Header</h1>
            <button onClick={() => changPageNamefunc('home')}>Home</button>
            <button onClick={() => changPageNamefunc('about')}>About</button>
            <button onClick={() => changPageNamefunc('posts')}>Posts</button>
            <button onClick={() => changPageNamefunc('post')}>Post</button>
            <button onClick={() => changPageNamefunc('admin')}>Admin</button>
            <button onClick={() => changPageNamefunc('contact')}>Contact</button>
        </div>
    )
}