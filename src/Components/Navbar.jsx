import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
            style={{ backgroundColor: "#2c3e50" }}
        >
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    START FRAMEWORK
                </NavLink>

                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ms-auto fw-bold">
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link custom-link">
                                ABOUT
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link custom-link">
                                PORTFOLIO
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link custom-link">
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
