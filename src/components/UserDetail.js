import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Detail</h2>
      <p>id: {user.id}</p>
      <p>Name: {user.title}</p>
      <p>body: {user.body}</p>
    </div>
  );
};

export default UserDetail;