import React, { useState } from 'react';

function Users() {
  const [data, setData] = useState([
    { id: 1, name: 'name1', mail: '@1', status: 'blocked' },
    { id: 2, name: 'name2', mail: '@2', status: 'accessed' },
    { id: 3, name: 'name3', mail: '@3', status: 'blocked' },
    { id: 4, name: 'name4', mail: '@4', status: 'accessed' },
    { id: 5, name: 'name5', mail: '@5', status: 'blocked' },
  ]);

  const toggleStatus = (id) => {
    setData(data.map((user) =>
      user.id === id
        ? { ...user, status: user.status === 'blocked' ? 'accessed' : 'blocked' }
        : user
    ));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F4F4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#3366CC' }}>User Management</h1>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
        }}
      >
        {data.map((user) => (
          <div
            key={user.id}
            style={{
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: user.status === 'blocked' ? '#FF6F61' : '#28A745',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>{user.name}</h4>
            <p style={{ fontSize: '14px' }}>{user.mail}</p>
            <p style={{ fontSize: '14px', textTransform: 'capitalize' }}>{user.status}</p>
            <button
              onClick={() => toggleStatus(user.id)}
              style={{
                marginTop: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#3366CC',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              {user.status === 'blocked' ? 'Unblock' : 'Block'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users