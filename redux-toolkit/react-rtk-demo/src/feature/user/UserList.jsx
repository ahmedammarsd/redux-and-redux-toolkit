import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserList = () => {
  const data = useSelector( (state) => state.user);
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchUsers())
  },[])
  return (
    <div>
        <h2>List Of User</h2>
        {
          data.loading && <div>LOADING...</div>
        }
        {
          !data.loading && data.error 
          ?
          <div>
            Error: {data.error}
          </div>
          :
          null
        }
        {
          !data.loading && data.data.length 
          ?
          <ul>
            {
              data.data.map( (user) => (
                <li key={user.id}>{user.name}</li>
              ))
            }
          </ul>
          : 
          null
        }
    </div>
  )
}

export default UserList