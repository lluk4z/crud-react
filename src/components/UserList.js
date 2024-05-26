import React from 'react';
import './UserList.css'

const UserList = ({ users, viewUser, editUser, deleteUser }) => {
  return (
    <div className='user-list'>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li className='block-user' key={user.id}>
            <div><span>Title: </span>{user.title}</div>
            <div><span>Body: </span>{user.body}</div>
            <br></br>
            <div className='buttons'>
                <button onClick={() => viewUser(user)}>View</button>
                <button onClick={() => editUser(user)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;