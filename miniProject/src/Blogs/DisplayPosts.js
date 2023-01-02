import React, { useState } from 'react';
import Post from './Post';
import { useOutletContext } from 'react-router-dom'
import './style.css'

const DisplayPosts = () => {

    const [blogs, setBlogs] = useOutletContext()
    const [dynamicValues, setDynamicValues] = useState(blogs)
    const [StartDate, setStartDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const header = ['Subject', 'Discription', 'CreatedDate']

    const handelsubit = (e) => {
        e.preventDefault()
        if (StartDate || EndDate) {
            if (StartDate !== '') {
                setDynamicValues((prev) => prev.filter((obj) => obj.date >= StartDate))
            }
            if (EndDate !== '') {
                setDynamicValues((prev) => prev.filter((obj) => obj.date <= EndDate))
            }

            console.log(dynamicValues);
        }
    }
    const handelclear = (e) => {
        e.preventDefault()
        setStartDate('')
        setEndDate('')
        setDynamicValues([...blogs])
    }

    return (
        <div className='wrapper'>
            <div className='first-column'>
                <form onSubmit={handelsubit}>
                    <label>Min Date</label>
                    <div className='serchInput'>
                        <input type="date" name='startDate' value={StartDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <br />
                    <br />
                    <label>Max Date</label>
                    <div className='serchInput' >
                        <input type="date" name='EndDate' value={EndDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <br />
                    <button className='btn'>Serch</button>
                    <button className='btn' type='button' onClick={handelclear}>Clear</button>
                </form>
                <br />
                <br />
                <br />
            </div >
            <dir className='second-column'>
                <Post data={dynamicValues} setBlogs={setBlogs} header={header} />
            </dir>
        </div>
    );
}

export default DisplayPosts;
