import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const Layout = (props) => {
    return (
        <div>
            <div>
                <nav className='navbar'>
                    <img src="/assets/logo3.png" alt="" />
                    <Link to={'/'}>
                        <img src='/assets/home.png' alt='#' />
                    </Link>
                </nav>
            </div>
            <div className='container'>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
