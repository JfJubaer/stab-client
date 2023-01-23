import React from 'react';
import { FaArtstation } from 'react-icons/fa';

const Nav = () => {
    return (
        <div>
            <nav className="navbar bg-success">
                <div className="container-fluid">
                    <h3 className="navbar-brand text-white"><FaArtstation /> Daily Operational</h3>
                    <h3 className="navbar-brand text-white">Berlin Local Time : Monday, 17 December 03:41pm</h3>

                </div>
            </nav>
        </div>
    );
};

export default Nav;