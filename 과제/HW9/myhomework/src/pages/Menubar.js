import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <button className='btn-8'><Link to={'/1button'}>1번</Link></button>
            <button className='btn-8'><Link to={'/2button'}>2번</Link></button>
            <button className='btn-8'><Link to={'/home'}>Home</Link></button>

            <Outlet />
        </div>
    );
};

export default Menubar;