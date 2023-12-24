import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../providers/user-provider";
import "../css/page.css";


/* This component displays a form to edit a post.
When the user is signedIn (getting the information from the global component user-provider and using
the useContext hook function), and click a post to edit, I get the selected post id, using the useParams() hook function.
Using the values from the posts-provider global component, and the useContext hook function I get the selected post
values to display them in the edit form. */

export function EditPost() {
    const {postsArray, setPostsArray, getPostById} = useContext(PostsContext);
    const {id} = useParams();
    const {user} = useContext(UserContext);
    const navigate = useNavigate()
    const originalPost = getPostById(id);
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: originalPost
    });

    // The postsArray is being updated using the "setPostsArray" function.
    const handelEditPost = (editPostData) => {
        const updatedPost = {
            id: id,
            title: editPostData.title,
            body: editPostData.body,
            date: editPostData.date,
            category: editPostData.category,
        }
        const updatePostsArray = postsArray.map((post) => String(post.id) === id ? updatedPost : post)
        setPostsArray(updatePostsArray)

        // Changing the routh to the posts page after submitting the post
        navigate("/posts")
    }

    // Using the useForm hook function I added validations to the edit form.
    return (
        <div className="page">
            <div className="hero-header">
                <div className="content-container">
                    <p className="title">Edit post</p>
                    {!user ? (<p className="subtitle">You must sign in to edit a post</p>) :
                        <form onSubmit={handleSubmit(handelEditPost)}>
                            <lable htmlFor="title">Post title</lable>
                            <input type="text" {...register("title", {
                                required: "The title is required",
                                minLength: {value: 3, message: "Minimum length is 3 chars"},
                                pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers"}
                            })} placeholder="Post title"/>
                            <p style={{color: 'red'}}>{errors.title?.message}</p>
                            <lable htmlFor="content">Post content</lable>
                            <textarea {...register("body", {required: "The content is required"})}
                                      placeholder="Post body"></textarea><br/>
                            <p style={{color: 'red'}}>{errors.body?.message}</p>
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
                                required: "Please enter the post date",
                            })}/><br/>
                            {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>};
                            <br/>
                            <button>Edit post</button>
                        </form>}
                </div>

            </div>
        </div>
    );
}



