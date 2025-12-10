import { FaPlus, FaStar } from "react-icons/fa";
import poert1 from "../assets/poert1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import { useState } from "react";

export function Portfolio() {
    const [selectedImg, setSelectedImg] = useState(null);

    const items = [
        { id: 1, img: poert1 },
        { id: 2, img: port2 },
        { id: 3, img: port3 },
        { id: 4, img: poert1 },
        { id: 5, img: port2 },
        { id: 6, img: port3 },
    ];

    return (
        <section className="portfolio-section text-dark text-center py-5">
            <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>

            <div className="star-divider my-4">
                <div className="line dark"></div>
                <i className="fa fa-star"></i>
                <div className="line dark"></div>
            </div>

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="col-md-4 col-sm-6"
                            onClick={() => setSelectedImg(item.img)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="portfolio-card position-relative">
                                <img src={item.img} alt="portfolio" className="w-100 rounded-3" />
                                <div className="overlay d-flex justify-content-center align-items-center">
                                    <FaPlus size={80} color="#fff" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGE MODAL */}
            {selectedImg && (
                <div
                    className="modal-backdrop-custom d-flex justify-content-center align-items-center"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="modal-img-container">
                        <img src={selectedImg} alt="Selected" className="modal-img rounded-3" />
                    </div>
                </div>
            )}
        </section>
    );
}