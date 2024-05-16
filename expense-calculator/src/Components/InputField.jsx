import React, { useEffect, useState } from 'react'
import TableContents from './TableContents'

const InputField = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [expense, setExpense] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setExpense([...expense, {
            id: Math.floor(Math.random() * 100000),
            name_:name,
            price_:price
        }])
    }
    useEffect(() => {
        console.log(expense)
    }, [expense])
  return (
    <div className='form'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className='name' onChange={(e) => setName(e.target.value)} />
        <input type="number" className='price' onChange={(e) => setPrice(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>

      <TableContents contents={expense} setContents={setExpense} />
    </div>
  )
}

export default InputField
