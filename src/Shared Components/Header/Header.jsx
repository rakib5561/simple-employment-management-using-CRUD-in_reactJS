import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='employeStatus'>Employe Status</Link>
                <Link to='/contact'>Contact</Link>
           </nav>
        </div>
    );
};

export default Header;