import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Banner from '../Components/Banner/Banner';
import { mycontacts } from './mycontacts';


const Contacts = () => {
    let activeStyle = {
        backgroundColor: 'rgb(0, 0, 0)',
        color: 'white'
    };

    const [contacts, setcontacts] = useState(mycontacts);

    return (
        <div>
            <Banner
                pageTitle={'Contacts.'}
                subtitle={'Here is Some of my Contacts that i have made '}
            />
            <div className='navigationWrapper'>
                <NavLink
                    className='navlink'
                    to="displayContacts"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Display Connects
                </NavLink>
                <NavLink
                    className='navlink'
                    to="createContacts"
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    Create Connects
                </NavLink>
            </div>
            <div className='outile'>
                <Outlet context={[contacts, setcontacts]} />
            </div>
        </div>
    );
}

export default Contacts;
