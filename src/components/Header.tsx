import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ombra-studio-TR.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary shadow">
            <nav className="flex justify-between items-center font-poppins px-8 text-lg font-light">
                {/* Logo */}
                <div className="flex justify-center">
                    <Link to="/">
                        <img src={logo} alt="Ombra Studio Logo" className="h-24" />
                    </Link>
                </div>

                {/* Menu Burger - Affiche en mobile/tablette */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <AiOutlineClose className="text-3xl text-darker" />
                        ) : (
                            <AiOutlineMenu className="text-3xl text-darker" />
                        )}
                    </button>
                </div>

                {/* Navbar - Masquée en mobile/tablette */}
                <ul className={`hidden lg:flex space-x-20`}>
                    <li>
                        <Link to="/" className="text-darker hover:text-dark">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-darker hover:text-dark">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-darker hover:text-dark">Contact</Link>
                    </li>
                </ul>

                {/* Menu burger déroulant en mobile/tablette */}
                {isMenuOpen && (
                    <ul className="lg:hidden absolute top-16 left-0 w-full bg-primary shadow-md flex flex-col items-center space-y-6 py-6 z-50">  {/* Ajout de z-50 ici */}
                        <li>
                            <Link to="/" className="text-darker hover:text-dark" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-darker hover:text-dark" onClick={toggleMenu}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-darker hover:text-dark" onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
