import { Link } from "react-router-dom";

export const NavigationMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Online Course Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={"/cart"}>Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}