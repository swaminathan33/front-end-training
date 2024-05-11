import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Profile = () => {
    const {name} = useParams();
    console.log(name)
  return (
    <div>
      Profile Page
      <Outlet />
    </div>
  )
}

export default Profile
