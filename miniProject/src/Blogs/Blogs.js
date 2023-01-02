import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import { myposts } from './myposts';

const Blogs = () => {

    let activeStyle = {
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white'
    };



    const [blogs, setBlogs] = useState(myposts);
    return (
        <div>

            <Banner
                pageTitle={'Blog.'}
                subtitle={'Here is Some of my Posts that i have made '}
            />
            <div className='navigationWrapper'>
                <NavLink
                    className='navlink'
                    to="displayPosts"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    List All Posts

                </NavLink>
                <NavLink
                    className='navlink'
                    to="createPost"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Create Post
                </NavLink>
            </div>

            <div className='outile'>
                <Outlet context={[blogs, setBlogs]} />
            </div>
        </div>
    );
}

export default Blogs;
