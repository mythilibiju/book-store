import React, { useState } from 'react';

function Userdetails() {
  const [data, setData] = useState([
    { id: 1, name: 'name1', mail: '@1', status: 'blocked' },
    { id: 2, name: 'name2', mail: '@2', status: 'accessed' },
    { id: 3, name: 'name3', mail: '@3', status: 'blocked' },
    { id: 4, name: 'name4', mail: '@4', status: 'accessed' },
    { id: 5, name: 'name5', mail: '@5', status: 'blocked' },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', mail: '', status: '' });

  const handleDelete = (id) => {
    setData(data.filter((user) => user.id !== id));
    setSelectedUser(null);
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.mail && newUser.status) {
      setData([...data, { id: Date.now(), ...newUser }]);
      setNewUser({ name: '', mail: '', status: '' });
    }
  };

  return (
    <div>
      {/* User Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5px',
          padding: '10px',
        }}
      >
        {data.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{
              width: '120px',
              height: '120px',
              padding: '5px',
              borderRadius: '5px',
              backgroundColor: 'lightgrey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <h4>{user.name}</h4>
            <h4>{user.mail}</h4>
            <h4>{user.status}</h4>
          </div>
        ))}
      </div>

      {/* Modal for Selected User */}
      {selectedUser && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid black',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          <h3>User Details</h3>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.mail}</p>
          <p><strong>Status:</strong> {selectedUser.status}</p>
          <button onClick={() => handleDelete(selectedUser.id)}>Delete</button>
          <button onClick={() => setSelectedUser(null)}>Close</button>
        </div>
      )}

      {/* Add User Form */}
      <div style={{ marginTop: '20px' }}>
        <h3>Add a New User</h3>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.mail}
          onChange={(e) => setNewUser({ ...newUser, mail: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

export default Userdetails;
