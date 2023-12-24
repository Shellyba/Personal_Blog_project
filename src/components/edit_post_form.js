import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../providers/user-provider";
import "../css/page.css";


export function EditPost() {

    const {postsArray, setPostsArray, getPostIndex, getPostById} = useContext(PostsContext);
    const { id } = useParams();
    const originalPost = getPostById(id);
    const {user} = useContext(UserContext);
    const navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm(
        {
            defaultValues:
                originalPost
        });

    const handelEditPost = (editPostData)=> {
        const updatedPost = {
            id: id,
            title: editPostData.title,
            body: editPostData.body,
            date: editPostData.date,
            category: editPostData.category,
        }
        const updatePostsArray = postsArray.map((post) =>
            String(post.id) === id ? updatedPost : post
        )
        setPostsArray(updatePostsArray)
        navigate("/posts")
    }

        return (
            <div className="page">
                <div className="hero-header">
                    <div className="content-container">
                        <p className="title" >Edit post</p>
                        {!user ? (<p className="subtitle">You must sign in to edit a post</p>):
                        <form onSubmit={handleSubmit(handelEditPost)}>
                        <lable htmlFor="title">Post title</lable>
                        <input type="text" {...register("title", {required: "The title is required", minLength: {value: 3, message: "Minimum length is 3 chars"}, pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers" } })} placeholder= "Post title"/>
                        <p style={{ color: 'red' }}>{errors.title?.message}</p>
                        <lable htmlFor="content">Post content</lable>
                        <textarea {...register("body", {required: "The content is required"})} placeholder= "Post body"></textarea><br/>
                        <p style={{ color: 'red' }}>{errors.body?.message}</p>
                            <label htmlFor="category">Choose category:</label>
                            <select {...register("category")}>
                            <option value="Brain">Brain</option>
                            <option value="Spinal cord">Spinal cord</option>
                            <option value="Vestibular">Vestibular</option>
                            <option value="Epilepsy">Epilepsy</option>
                            <option value="Neurodegenerative">Neurodegenerative</option>
                            <option value="Inflammation">Inflammation</option>
                        </select><br/>
                        <lable htmlFor="date">Post date</lable>
                        <input type="date" {...register("date", {
                            required: "Please enter the post date",})}/><br/>
                        {errors.date && <span style={{ color: 'red' }}>{errors.date.message}</span>}

                        <br/>
                        <button >Edit post</button>
                    </form>}
                    </div>

                </div>
            </div>

        )
}



