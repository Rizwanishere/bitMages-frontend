import { Link } from "react-router-dom";
import './styles.css';

function Header() {
    return (
        <header className="sticky top-0 bg-white text-light-grey border-b border-gray-200">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link to="/" className="flex text-2xl">
                    {/* Logo goes here */}
                    Gymini
                </Link>
                <ul className="flex space-x-4">
                    <li><Link to="/about" class="JS76Uv" className="nav-link">About</Link></li>
                    <li><Link to="/workouts" className="nav-link">Workouts</Link></li>
                    <li><Link to="/programs" className="nav-link">Programs</Link></li>
                    <li><Link to="/product" className="nav-link">Store</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/" className="nav-link">Cart</Link></li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;