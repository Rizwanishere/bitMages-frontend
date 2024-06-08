import { Link } from "react-router-dom";
import './styles.css';

function Header() {
    return (
        <header className="sticky top-0 bg-white text-light-grey border-b border-gray-200 shadow-md z-50">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Left side: Logo and primary navigation */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        Gymini
                    </Link>
                    <ul className="flex space-x-4">
                        <li><Link to="/workouts" className="nav-link">Workouts</Link></li>
                        <li><Link to="/programs" className="nav-link">Programs</Link></li>
                        <li><Link to="/store" className="nav-link">Store</Link></li>
                    </ul>
                </div>

                {/* Right side: Secondary navigation */}
                <ul className="flex space-x-4">
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    <li><Link to="/cart" className="nav-link">Cart</Link></li>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
