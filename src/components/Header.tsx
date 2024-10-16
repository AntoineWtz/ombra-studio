import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-ombra-studio-TR.png';

const Header: React.FC = () => {
    return (
        <header className="bg-primary shadow">
            <nav className="flex justify-between items-center font-poppins px-8">

                <div className="flex justify-center">
                    <Link to="/"><img src={logo} alt="Ombra Studio Logo" className="h-24" /></Link>
                </div>

                <ul className="flex space-x-12">
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
            </nav>
        </header>
    );
};

export default Header;
