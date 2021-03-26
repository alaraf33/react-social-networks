import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="" className={s.item}>Profile</a></div>
            <div><a href="" className={s.item}>Messages</a></div>
            <div><a href="" className={`${s.item} ${s.active}`}>News</a></div>
            <div><a href="" className={s.item}>Music</a></div>
            <div><a href="" className={s.item}>Setings 555</a></div>
        </nav>
    );
};

export default Navbar;