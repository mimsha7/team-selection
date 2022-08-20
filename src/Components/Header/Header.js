import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/players"><i className="fa-solid fa-user-plus"></i> All Players</a>
                <a href="/details"><i className="fa-solid fa-list-check"></i> Player Details</a>
                <a href="/manage"><i className="fa-solid fa-gears"></i> Manage Player</a>
            </nav>
        </div>
    );
};

export default Header;