import {ContactForm} from "../components/contact_form";
import "../css/page.css";

export function Contact() {
    return (<div className="page">
        <div className="hero">
            <div className="hero-header">
                <div className="content-container">
                    <p className="title">Contact</p>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="content-container">
                <div>
                    <ContactForm/>
                </div>
                <div className="section" id="daily-digest">
                    <div className="section-header"></div>
                </div>
            </div>
        </div>
    </div>);
}