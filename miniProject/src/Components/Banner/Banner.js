import React from 'react';
import './style.css'


const Banner = ({ pageTitle, subtitle }) => {
    return (
        <div className='banner'>
            <h1>{pageTitle}</h1>
            <h3>{subtitle} </h3>
        </div>
    );
}

export default Banner;
