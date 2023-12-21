import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";

export function EditPost() {

    const {postsArray, setPostsArray, getPostIndex, getPostById} = useContext(PostsContext);
    const { id } = useParams();
    // const postIndex = getPostIndex(id);
    const originalPost = getPostById(id);
    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm(
        {
            defaultValues:
                originalPost
        });


    const navigate = useNavigate()

    const handelEditPost = (editPostData)=> {
        const updatedPost = {
            id: id,
            title: editPostData.title,
            body: editPostData.body,
            date: editPostData.date
        }
        const updatePostsArray = postsArray.map((post) =>
            String(post.id) === id ? updatedPost : post
        )
        setPostsArray(updatePostsArray)
        navigate("/posts")

    }


    return (<div>
        <form onSubmit={handleSubmit(handelEditPost)}>
            <lable htmlFor="title">Post title</lable>
            <input type="text" {...register("title", {required: "The title is required", minLength: {value: 3, message: "Minimum length is 3 chars"}, pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers" } })} placeholder= "Post title"/>
            <p style={{ color: 'red' }}>{errors.title?.message}</p>
            <lable htmlFor="content">Post content</lable>
            <textarea {...register("body", {required: "The content is required"})} placeholder= "Post body"></textarea><br/>
            <p style={{ color: 'red' }}>{errors.body?.message}</p>
            <lable htmlFor="date">Post date</lable>
            <input type="date" {...register("date", {
                required: "Please enter the post date",
                validate: date=>{
                    // const watchDate = watch(date)
                    const currDate = new Date().toJSON().split('T')[0];
                    if (date !== currDate){
                        return "The date needs to be today's date";}
                }})}/><br/>
            {errors.date && <span style={{ color: 'red' }}>{errors.date.message}</span>}

            <br/>
                <button >Add post</button>
        </form>

    </div>
    )

}