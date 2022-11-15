import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><h1>Celulares Fronchamiar</h1></Link>
            <ul className="list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/Samsung">Samsung</Link>
                </li>
                <li>
                    <Link to="/category/Motorola">Motorola</Link>
                </li>
                <li>
                    <Link to="/category/Apple">Apple</Link>
                </li>
                <li>
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}


export default NavBar;