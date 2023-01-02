import React, { useState } from 'react';
import './post.css'

const Post = ({ data, header, setBlogs }) => {

    const [comment, setcomment] = useState('');

    const handelReplay = (e, index) => {
        data[index].comments.push(comment)
        setBlogs((prev) => ([...prev]))
        document.getElementsByName('comment')[index].value = ''
        setcomment('')
    }
    const handelLikes = (e, index) => {
        data[index].likes = data[index].likes + 1
        setBlogs((prev) => ([...prev]))

    }



    return (
        <div>
            {data?.map((item, index) =>
                <div key={index} >
                    <div className='post'>
                        <div className='title'>
                            <h2>{item.subject}</h2>
                            <h5>{item.date}</h5>
                        </div>
                        <p>{item.discription}</p>
                        <div>
                            <h3>Likes {item.likes}</h3>
                            <br />
                            <button className='btn' onClick={(e) => handelLikes(e, index)}>Like</button>
                        </div>
                        <br />
                        <div className='comment'>
                            <input type="text" name='comment' onChange={(e) => setcomment(e.target.value)} />
                            <button className='btn' onClick={e => handelReplay(e, index)}>Comment</button>
                        </div>
                        <h3>Comments </h3>
                        {
                            item.comments?.map((m, i) => (
                                <p key={i}>{m}</p>
                            ))
                        }
                    </div>
                </div>
            )}

        </div>
    );
}

export default Post;




















// import React from 'react';
// import './style.css'

// const Table = ({ data, header }) => {

//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         {header.map((title, index) => (
//                             <th key={index}>{title}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, idex) =>
//                         <tr key={idex}>
//                             <td>{item.subject}</td>
//                             <td>{item.discription}</td>
//                             <td>{item.date}</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Table;
