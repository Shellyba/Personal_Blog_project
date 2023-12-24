import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';


// This component displays a form to add a post. I use this component in the Admin component.
// Getting the post values from the form inputs and calling the addPost function (from the posts-provider global component).
export function PostForm({addPostFunc}) {

    const {addPost} = useContext(PostsContext);
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const navigate = useNavigate()

    const handleNewPostSubmit = (data) => {
        addPost({
            id: uuidv4(), title: data.title, body: data.body, date: data.date, category: data.category,
        })
        reset()

        // Changing the routh to the posts page after submitting the post
        navigate("/posts")
    }

    // Using the useForm hook function I added validations to the add post form.
    return (
        <div>
            <form onSubmit={handleSubmit(handleNewPostSubmit)}>
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
                    required: "Please enter the post date", validate: date => {
                        const currDate = new Date().toJSON().split('T')[0];
                        if (date < currDate) {
                            return "Enter today's date or onwards";
                        }
                    }
                })}/><br/>
                {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>};

                <br/>
                <button>Add post</button>
            </form>
        </div>
    );
}