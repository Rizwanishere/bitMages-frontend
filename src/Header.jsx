import "./styles.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "./context/SidebarContext";
import { CartContext } from "./context/CartContext";

function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-white text-light-grey border-b border-gray-200 shadow-md z-10 relative">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left side: Logo and primary navigation */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-primary">
            Gymini
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/ai" className="nav-link">
                Workouts
              </Link>
            </li>
            <li>
              <Link to="/programs" className="nav-link">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Store
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: Secondary navigation */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center z-20" 
          >
            <BsBag className="text-2xl" />
            <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </button>
        </div>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
        
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-30`}>
        {/* Sidebar content here */}
      </div>
    </header>
  );
}

export default Header;
