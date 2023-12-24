import "../css/footer.css";

export function Footer() {
    return (
        <div>
            <h4 className="footer-title">NeuroVet Newsletter </h4>
            <p className="footer-subtitle"> Join my mailing list</p>
            <form className="footer-form">
                <div className="input">
                    <input className="footer-input" type="text" id="name" placeholder="Name"/>
                    <input className="footer-input" type="email" id="email" placeholder="Email"/>
                    <select className="footer-input" name="blogGuest" id="blogGuest">
                        <option value="" disabled selected hidden>Are you a Vet or Pet owner</option>
                        <option value="Spinal cord">Vet</option>
                        <option value="Vestibular">Pet Owner</option>
                    </select><br/>
                </div>
                <div className="submit">
                    <input className="submit-button" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
}