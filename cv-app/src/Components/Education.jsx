import React, { useState } from 'react'
import { useGlobalContext } from '../useContext'

const Education = () => {
  const { form, setForm, handleSubmit } = useGlobalContext();
  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="school-name">
          <h3>School Name</h3> <input type="text" onChange={(e) => setForm((item) => {
            return {...item, school : e.target.value}
          })}/>
        </div>
        <div className="title-of-study">
          <h3>Title Of Study</h3> <input type="text" onChange={(e) => setForm((item) => {
            return {...item,title : e.target.value}
          })}/>
        </div>
        <div className="date-of-study">
          <h3>Date Of Study</h3> <input type="text" onChange={(e) => setForm((item) => {
            return {...item, date : e.target.value}
          })}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Education
