import { FaStar } from "react-icons/fa";

export default function About() {
    return (
        <section className="about-section d-flex flex-column  align-items-center text-white">
            <div className="container text-center">

                {/* Title */}
                <h1 className="fw-bold mb-3">ABOUT COMPONENT</h1>

                {/* Star Divider */}
                <div className="star-divider my-4">
                    <div className="line"></div>
                    <FaStar size={20} />
                    <div className="line"></div>
                </div>

                {/* Two Columns */}
                <div className="row justify-content-center px-5">
                    <div className="col-md-5 text-start fs-7 mb-4">
                        Freelancer is a free bootstrap theme created by Route. The download includes
                        the complete source files including HTML, CSS, and JavaScript as well as
                        optional SASS stylesheets for easy customization.
                    </div>

                    <div className="col-md-5 text-start fs-7 mb-4">
                        Freelancer is a free bootstrap theme created by Route. The download includes
                        the complete source files including HTML, CSS, and JavaScript as well as
                        optional SASS stylesheets for easy customization.
                    </div>
                </div>

            </div>
        </section>
    );
}
