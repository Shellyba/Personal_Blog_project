import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {UserContext} from "../providers/user-provider";
import "../css/page.css";
import "../css/forms.css";


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
    return (<div className="page">
        <div className="hero">
            <div className="hero-header">
                <div className="content-container">
                    <p className="title">Edit post</p>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="content-container">
                {!user ? (<p className="subtitle">You must sign in to edit a post</p>) :
                    <form onSubmit={handleSubmit(handelEditPost)}>
                        <div className="mb-3">
                            <lable htmlFor="title" className="form-label">Post title</lable>
                            <input type="text" className="form-control"{...register("title", {
                                required: "The title is required",
                                minLength: {value: 3, message: "Minimum length is 3 chars"},
                            })} placeholder="Post title"/>
                            <p style={{color: 'red'}}>{errors.title?.message}</p>
                        </div>
                        <div className="mb-3">
                            <lable htmlFor="content" className="form-label" className="form-label">Post content
                            </lable>
                            <textarea
                                className="form-control" {...register("body", {required: "The content is required"})}
                                placeholder="Post body"></textarea>
                            <p style={{color: 'red'}}>{errors.body?.message}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Choose category:</label>
                            <select className="form-select"{...register("category")}>
                                <option value="Brain">Brain</option>
                                <option value="Spinal cord">Spinal cord</option>
                                <option value="Vestibular">Vestibular</option>
                                <option value="Epilepsy">Epilepsy</option>
                                <option value="Neurodegenerative">Neurodegenerative</option>
                                <option value="Inflammation">Inflammation</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <lable htmlFor="date">Post date</lable>
                            <input type="date" className="form-control" {...register("date", {
                                required: "Please enter the post date",
                            })}/>
                            {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>}
                        </div>
                        <div className="button-div">
                            <button className="form-button">Edit post</button>
                        </div>
                    </form>}
                <div className="section" id="daily-digest">
                    <div className="section-header"></div>
                </div>
            </div>
        </div>
    </div>);
}





