import React, { useState } from 'react'
import { useGlobalContext } from '../useContext'

const Experience = () => {
  const { form, setForm, handleSubmit, setEdit } = useGlobalContext();

  const handleEdit = () =>{
    setEdit(true)
    
  }
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="company">
          <h3>Company</h3> <input type="text"  onChange={(e) => setForm((item) => {
            return {...item, company : e.target.value}
          })}/>
        </div>
        <div className="position">
          <h3>Position</h3> <input type="text"  onChange={(e) => setForm((item) => {
            return {...item, position : e.target.value}
          })}/>
        </div>
        <div className="responsibilities">
          <h3>Responsibilities</h3> <input type="text" onChange={(e) => setForm((item) => {
            return {...item, responsibility : e.target.value}
          })}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => setEdit(true)}>Edit</button>
    </div>
  )
}

export default Experience
