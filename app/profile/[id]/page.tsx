import React from 'react'

const UserProfile = ({params} : any) => {
  return (
    <div>
      User  Profile
      <h1>Id no {params.id}</h1>
    </div>
  )
}

export default UserProfile