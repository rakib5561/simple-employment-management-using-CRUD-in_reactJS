import React from 'react';
import './About.css';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default About;