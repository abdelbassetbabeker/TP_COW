import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const CreatePost = () => {

    const navigate = useNavigate();
    const [blogs, setBlogs] = useOutletContext()
    const [newBloge, setnewBloge] = useState({});

    const handelchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setnewBloge({ ...newBloge, [name]: value, likes: 0, comments: [] })
    }



    const handelsubmite = (e) => {
        e.preventDefault()
        setBlogs([...blogs, newBloge])
        navigate('/Blogs/displayBlogs')
    }


    return (
        <div className='formContainer'>
            <h2>Please fill in this form to add new Blog !</h2>
            <form onSubmit={handelsubmite}>
                <div className='input'>
                    <label>Subject Name</label>
                    <input
                        type="text"
                        name='subject'
                        onChange={handelchange}
                    />
                </div>
                <div className='input'>
                    <label>Discription</label>
                    <input
                        type="text"
                        name='discription'
                        onChange={handelchange}
                    />
                </div>
                <div className='input'>
                    <label>Date</label>
                    <input
                        type="date"
                        name='date'
                        onChange={handelchange}
                    />
                </div>
                <button className='btn'>Add new Blog</button>
            </form>
        </div>
    );
}

export default CreatePost;
