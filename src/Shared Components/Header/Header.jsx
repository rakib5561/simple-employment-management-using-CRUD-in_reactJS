import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-wrapper'>
           <div className='container'>
                <nav className='primary-menu'>
                    <h3 className='logo'>RBM Group</h3>
                    <div>
                        <Link className='menu-item' to='/home'>Home</Link>
                        <Link className='menu-item' to='/about'>About</Link>
                        <Link className='menu-item' to='/employeStatus'>Employe Status</Link>
                        <Link className='menu-item' to='/contact'>Contact</Link>
                    </div>
            </nav>
           </div>
        </div>
    );
};

export default Header;