import "./styles.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "./context/SidebarContext";
import { CartContext } from "./context/CartContext";
import ShouldRender from "./util/ShouldRender";
import UserContext from "./context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { isLoggedin, setLoggedin } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const onLogoutButton = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    setLoggedin(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!isLoggedin && currentPath === "/ai") {
      navigate("/signin");
      toast.error("Please Sign In to continue!");
    }
  }, [isLoggedin, navigate]);

  // Mobile Menu Component
  const MobileMenu = () => (
    <div className="flex items-center justify-between py-4 px-6 lg:hidden">
      <Link to="/" className="text-2xl font-bold text-primary">
        Gymini
      </Link>
      <div className="flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary text-3xl mr-4"
        >
          &#9776;
        </button>
        <ShouldRender when={isLoggedin}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative max-w-[50px] cursor-pointer"
          >
            <BsBag className="text-2xl" />
            <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </ShouldRender>
      </div>
    </div>
  );

  // Mobile Toggle Menu Component
  const ToggleMenu = () => (
    <ul className="flex flex-col mb-2 space-y-4 px-6 lg:hidden">
      <li>
        <Link to="/ai" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Workouts
        </Link>
      </li>
      <li>
        <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Store
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </li>
      <ShouldRender when={!isLoggedin}>
        <li>
          <Link
            to="/signin"
            className="p-1 rounded-lg bg-white text-primary border border-primary hover:text-white hover:bg-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </Link>
        </li>
      </ShouldRender>
      <ShouldRender when={isLoggedin}>
        <li>
          <button
            onClick={() => {
              onLogoutButton();
              setIsMenuOpen(false);
            }}
            className="border px-1 border-primary rounded text-primary hover:text-white hover:bg-primary"
          >
            Logout
          </button>
        </li>
      </ShouldRender>
    </ul>
  );

  return (
    <header className="bg-white text-light-grey border-b border-gray-200 shadow-md z-10 relative">
      <nav className="container mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between py-4 px-6">
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
              <Link to="/products" className="nav-link">
                Store
              </Link>
            </li>
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
            <ShouldRender when={isLoggedin}>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex relative max-w-[50px]"
              >
                <BsBag className="text-2xl" />
                <div className="bg-primary absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
                  {itemAmount}
                </div>
              </div>
            </ShouldRender>
            <ShouldRender when={!isLoggedin}>
              <li>
                <Link
                  to="/signin"
                  className="p-1 rounded-lg bg-white text-primary border ml-2 border-primary hover:bg-primary hover:text-white"
                >
                  Sign in
                </Link>
              </li>
            </ShouldRender>
            <ShouldRender when={isLoggedin}>
              <li>
                <button
                  onClick={onLogoutButton}
                  className="text-primary ml-2 border rounded px-1 border-primary hover:border hover:bg-primary hover:text-white"
                >
                  Logout
                </button>
              </li>
            </ShouldRender>
          </ul>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <MobileMenu />
          <ShouldRender when={isMenuOpen}>
            <ToggleMenu />
          </ShouldRender>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-30`}
      >
        {/* Sidebar content here */}
      </div>
    </header>
  );
}

export default Header;
