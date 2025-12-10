import { FaFacebook, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <div>
            {/* FOOTER TOP */}
            <section className="footer-top text-white py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold">LOCATION</h5>
                            <p className="mt-3 mb-0">2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold">AROUND THE WEB</h5>
                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <FaFacebook size={30} className="icon-bg d-flex justify-content-center align-items-center rounded-circle text-white" />
                                <FaTwitter size={30} className="icon-bg d-flex justify-content-center align-items-center rounded-circle text-white" />
                                <FaLinkedin size={30} className="icon-bg d-flex justify-content-center align-items-center rounded-circle text-white" />
                                <FaGlobe size={30} className="icon-bg d-flex justify-content-center align-items-center rounded-circle text-white" />
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h5 className="fw-bold">ABOUT FREELANCER</h5>
                            <p className="mt-3">
                                Freelance is a free to use, licensed Bootstrap theme created by Route.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COPYRIGHT */}
            <footer className="bg-dark text-center text-white py-3">
                <p className="mb-0">Copyright © Your Website 2021</p>
            </footer>
        </div>
    )
}

export default Footer
