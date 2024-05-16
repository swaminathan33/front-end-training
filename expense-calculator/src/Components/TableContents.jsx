import React, { useEffect, useState } from 'react'
import '../App.css'

const TableContents = ({contents, setContents}) => {
    let total = 0;

    const handleDelete = (id) =>{
        const newContents = contents.filter((item) => item.id !== id)
        setContents(newContents)
    }

  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
            {
                contents.map((item, index) => {
                    total = parseInt(total) + parseInt(item.price_)
                    console.log(total)
                    return (
                        <tr key={index}>
                            <td>{item.name_}</td>
                            <td>{item.price_}</td>
                            <td><button onClick={() => handleDelete(item.id)}>❌</button></td>
                        </tr>
                    )
                })
            }
        </table>
        <h3 className='total'>Total = {total} </h3>
    </div>
  )
}

export default TableContents
