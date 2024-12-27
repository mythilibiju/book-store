import React from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();

  const Loginsuccess = () => {
    navigate('/main'); 
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'light grey',
      }}
    >
      <div
        style={{
          height: 'auto',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          borderRadius: '8px',

          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px', color: '#333' }}>
          Admin Login
        </h1>
        <TextField
          label="Email"
          variant="outlined"
          style={{ marginBottom: '15px' }}
        />
        <TextField
          label="Admin ID"
          variant="outlined"
          style={{ marginBottom: '15px' }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          style={{ marginBottom: '20px' }}
        />
        <Button
        onClick={Loginsuccess}
          variant="contained"
          color="primary"
          style={{ padding: '10px', fontSize: '16px' }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
