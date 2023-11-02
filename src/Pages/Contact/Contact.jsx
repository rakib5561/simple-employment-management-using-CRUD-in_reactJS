import React from 'react';
import './Contact.css';
import { Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;