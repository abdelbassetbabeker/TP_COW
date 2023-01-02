import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import './App.css'

const Home = () => {
    return (
        <>
            <div>
                <Banner
                    pageTitle={' I am Abdelbasset BABEKER'}
                    subtitle={'Welcom To my Profile Homepage '}
                />
                <div id='homePage'>
                    <Link to={'/blogs'}>
                        <div className='cards'>
                            <h1>Blogs</h1>
                            <p>You can Browser my blog posts here </p>
                        </div>
                    </Link>
                    <Link to={'/contacts'}>
                        <div className='cards'>
                            <h1>Contacts</h1>
                            <p>You can display and create a new Contacts here </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
