import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Table from './Table';

const DisplayContacts = () => {
    const [contacts] = useOutletContext()
    const [typeserch, setTypeserch] = useState('name');
    const [dynamicValues, setDynamicValues] = useState(contacts);


    const header = ['Name', 'Phone', 'Email']


    const handelSerch = (e) => {
        const serch = e.target.value
        if (serch !== '') {
            const aa = contacts.filter((obj) => obj[`${typeserch}`].toUpperCase().indexOf(serch.toUpperCase()) > -1)
            setDynamicValues(aa)
        }
        else if (serch === '') {
            setDynamicValues(contacts)
        }
    }

    return (
        <div>
            <div>
                <label>Search</label>
                <div className='serchInput'>
                    <select name="pets" id="pet-select" onChange={(e) => setTypeserch(e.target.value)}>
                        <option value='name'>Name</option>
                        <option value='phone'>phone</option>
                        <option value='email'>Email</option>
                    </select>
                    <input type="text" onChange={handelSerch} />
                </div>
            </div>
            <br />
            <br />
            <Table header={header} data={dynamicValues} />
        </div>
    );
}

export default DisplayContacts;
