import { FaStar } from "react-icons/fa";


export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <h2 className="contact-title">
                CONTACT SECTION
            </h2>

            <div className="divider">
                <span></span>
                <FaStar size={20} />
                <span></span>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="userName" />
                <input type="number" placeholder="userAge" />
                <input type="email" placeholder="userEmail" />
                <input type="password" placeholder="userPassword" />

                <button type="submit">send Message</button>
            </form>
        </section>
    );
}
