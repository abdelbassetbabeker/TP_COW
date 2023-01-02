import React from 'react';
import './style.css'

const Table = ({ data, header }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {header.map((title, index) => (
                            <th key={index}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idex) =>
                        <tr key={idex}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
