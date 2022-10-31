import "./navbar.css";
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <a href="#"><h1>Celulares Fronchamonga</h1></a>
            <ul className="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Contacto</a></li>
                <CartWidget />
            </ul>
        </nav>
    );
}


export default NavBar;