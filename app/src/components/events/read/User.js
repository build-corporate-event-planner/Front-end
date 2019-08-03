import React from 'react'

export default function User(props) {
  const user = props.user.user

  return (
    <div className='user'>
      {(user.image) ? <img src={user.image} /> : ''}
      
      <h6>{user.username}</h6>
      <p>email: {user.email}</p>
      <p>companyname: {user.companyname}</p>
      <p>role: {user.role}</p>
      
      <div className='userRoles'>userRoles: (array)
        {(user.userRoles)
          ?  user.userRoles.map((i) => (i))
          : 'None'
        }
      </div>

      <div className='authority'>authority: (array)
        {(user.authority)
          ?  user.authority.map((i) => (i))
          : <p>None</p>
        }
      </div>

    </div>
  )
}
