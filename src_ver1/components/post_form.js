export function PostForm({addPostFunc}){
    const handleNewPostSubmit = (event) => {
        event.preventDefault();

        const {title, content} = event.target.elements;
        // const {picture} = URL.createObjectURL(event.target.files[0]);
        ;

        addPostFunc({
            title: title.value,
            content: content.value,
            // picture: picture,
        })
    }


    return(
        <div>
            <form onSubmit={handleNewPostSubmit}>
                <lable htmlFor="title">Post title</lable>
                <input id= "title" name="title" type="text"/><br/>
                <lable htmlFor="content">Post content</lable>
                <textarea id="content" name="content"></textarea><br/>
                <label htmlFor="picture">Select a picture:</label>
                <input type="file" id="picture" name="picture"/><br/>
                <button>Submit</button>

            </form>
        </div>
    )
}