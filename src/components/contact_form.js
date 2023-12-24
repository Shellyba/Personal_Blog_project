import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "../css/forms.css";

export function ContactForm() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()

    const handleNewContactSubmit = (data) => {
        // Changing the routh to the home page after submitting the form
        navigate("/")
    }
    // Using the useForm hook function I added validations to the contact form.
    return (
        <div className="my-form page">
            <form onSubmit={handleSubmit(handleNewContactSubmit)}>
                <div className="mb-3">
                    <lable htmlFor="name" className="form-label">Name</lable>
                    <input type="text" className="form-control" {...register("name", {
                        required: "Please enter your name"
                    })} placeholder="Name"/>
                    <p style={{color: 'red'}}>{errors.name?.message}</p>
                </div>
                <div className="mb-3">
                    <lable htmlFor="Email" className="form-label">Email</lable>
                    <input type="email novalidate" className="form-control"{...register("email", {
                        required: "Please enter your Email",
                        pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address"}
                    })}
                           placeholder="Email"/>
                    <p style={{color: 'red'}}>{errors.email?.message}</p>
                </div>
                <div className="mb-3">
                    <lable htmlFor="content" className="form-label">Message:</lable>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="button-div">
                    <button className="form-button">Submit</button>
                </div>
            </form>
        </div>
    )
}