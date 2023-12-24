import {useContext} from "react";
import {PostsContext} from "../providers/posts-provider";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import "../css/forms.css";


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
        <div className="my-form page">
            <form onSubmit={handleSubmit(handleNewPostSubmit)}>
                <div className="mb-3">
                    <lable htmlFor="title" className="form-label">Post title:</lable>
                    <input type="text" className="form-control" {...register("title", {
                        required: "The title is required",
                        minLength: {value: 3, message: "Minimum length is 3 chars"},
                        pattern: {value: /^[A-Za-z\d']+$/i, message: "Title must include letters and numbers"}
                    })} placeholder="Post title"/>
                    <p style={{color: 'red'}}>{errors.title?.message}</p>
                </div>
                <div className="mb-3">
                    <lable htmlFor="content" className="form-label">Post content:</lable>
                    <textarea className="form-control"{...register("body", {required: "The content is required"})}
                              placeholder="Post content"></textarea>
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
                    <lable htmlFor="date" className="form-label">Post date:</lable>
                    <input type="date" className="form-control" {...register("date", {
                        required: "Please enter the post date", validate: date => {
                            const currDate = new Date().toJSON().split('T')[0]
                            if (date < currDate) {
                                return "Enter today's date or onwards";
                            }
                        }
                    })}/>
                    {errors.date && <span style={{color: 'red'}}>{errors.date.message}</span>}
                </div>
                <div className="button-div">
                    <button className="form-button">Add post</button>
                </div>
            </form>
        </div>
    );
}