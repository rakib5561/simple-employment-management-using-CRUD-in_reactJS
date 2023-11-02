import React from 'react';
import './EmployeStatus.css';
import { Outlet } from 'react-router-dom';

const EmployeStatus = () => {
    return (
        <div>
            
            <div className='employe-wrapper'>
                <div className='container'>
                    <h1 className='employe-title'>Current Status</h1>

                    <div className='Add-employer'>
                    </div>

                </div> 
            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default EmployeStatus;