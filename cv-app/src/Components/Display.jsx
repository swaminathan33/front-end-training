import React from 'react'
import { useGlobalContext } from '../useContext'

const Display = () => {
  const {form} = useGlobalContext();
  const {
    name, email, no, school,title, date, company, position, responsibility
  } = form;

  return (
    <div>
      {responsibility ?
       `I am ${name} studied ${title} at ${school} in ${date}. 
       I already worked at ${company} as a ${position}.
       ${responsibility}
       if you want to hire me, contact ${email} and ${no}`
      : 
      
      
      ''}
    </div>
  )
}

export default Display
