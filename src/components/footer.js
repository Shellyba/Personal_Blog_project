import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import "../css/footer.css";

export function Footer() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()

    const handleNewNewsletter = (data) => {
        // Changing the routh to the home page after submitting the form
        navigate("/")
    }
    return (<div>
            <h4 className="footer-title">NeuroVet Newsletter </h4>
            <p className="footer-subtitle"> Join my mailing list</p>
            <form className="footer-form" onSubmit={handleSubmit(handleNewNewsletter)}>
                <div className="input">
                    <input className="footer-input" type="text" id="name" placeholder="Name"/>
                    <input className="footer-input" type="email novalidate" {...register("email", {
                        required: "Please enter your Email",
                        pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address"}
                    })}
                           placeholder="Email"/>
                    <select className="footer-input" name="blogGuest" id="blogGuest">
                        <option value="" disabled selected hidden>Are you a Vet or Pet owner</option>
                        <option value="Spinal cord">Vet</option>
                        <option value="Vestibular">Pet Owner</option>
                    </select><br/>
                </div>
                <div className="email-validate">
                    <p style={{color: 'red'}}>{errors.email?.message}</p>
                </div>
                <div className="submit">
                    <input className="submit-button" type="submit" value="Submit"/>
                </div>
            </form>
        </div>);
}