import React, { useState } from 'react'
import { useGlobalContext } from '../useContext'

const GeneralInfo = () => {

  const { form, setForm, handleSubmit,handleEdit } = useGlobalContext();
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="name">
          <h3>Name</h3> <input type="text" onChange={(e) => setForm((item) => {
            return { ...item, name: e.target.value }
          })} />
        </div>
        <div className="email">
          <h3>Email</h3> <input type="text" onChange={(e) => setForm((item) => {
            return { ...item, email: e.target.value }
          })} />
        </div>
        <div className="number">
          <h3>Phone Number</h3> <input type="text" onChange={(e) => setForm((item) => {
            return { ...item, no: e.target.value }
          })} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default GeneralInfo
