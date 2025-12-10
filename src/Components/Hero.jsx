import { FaStar } from "react-icons/fa";
import avatar from "../assets/avataaars.svg";
function Hero() {
    return (
        <div>
            {/* HERO SECTION */}
            <main className="hero d-flex flex-column justify-content-center align-items-center text-white">
                <img
                    src={avatar}
                    alt="Avatar"
                    className="hero-img mb-3"
                />
                <h1 className="fw-bold display-5">START FRAMEWORK</h1>

                <div className="star-divider my-3">
                    <div className="line"></div>
                    <FaStar size={20} />

                    <div className="line"></div>
                </div>

                <p className="fs-5">
                    Graphic Artist • Web Designer • Illustrator
                </p>
            </main>
        </div>
    )
}

export default Hero
