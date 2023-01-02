import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const CreateContacts = () => {

    const navigate = useNavigate();
    const [contact, setcontact] = useOutletContext()
    const [newContact, setnewContact] = useState({});

    const handelchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setnewContact({ ...newContact, [name]: value })
    }



    const handelsubmite = (e) => {
        e.preventDefault()
        setcontact([...contact, newContact])
        navigate('/contacts/displayContacts')
    }


    return (
        <div>
            <form onSubmit={handelsubmite} className='formContainer'>
                <h2>Please fill in this form to add new contact</h2>
                <div className='input'>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name='name'
                        onChange={handelchange}
                    />
                </div>
                <div className='input'>
                    <label>Phone number</label>
                    <input
                        type="number"
                        name='phone'
                        onChange={handelchange}
                    />
                </div>
                <div className='input'>
                    <label>Email</label>
                    <input
                        type="email"
                        name='email'
                        onChange={handelchange}
                    />
                </div>
                <button className='btn'>Add new contact</button>
            </form>
        </div>
    );
}

export default CreateContacts;
