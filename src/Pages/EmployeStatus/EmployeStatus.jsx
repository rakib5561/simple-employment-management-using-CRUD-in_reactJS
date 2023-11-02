import React from 'react';
import './EmployeStatus.css';
import { Outlet } from 'react-router-dom';

const EmployeStatus = () => {
    return (
        <div>
            <h1>Employe management</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default EmployeStatus;