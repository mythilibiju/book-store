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
                backgroundColor: '#F4F4F4',
            }}
        >
            <div
                style={{
                    width: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '30px',
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1
                    style={{
                        textAlign: 'center',
                        marginBottom: '25px',
                        fontSize: '24px',
                        color: '#3366CC', 
                        fontWeight: 'bold',
                    }}
                >
                    Admin Login
                </h1>
                <TextField
                    label="Email"
                    variant="outlined"
                    style={{
                        marginBottom: '15px',
                        backgroundColor: '#F4F4F4',
                    }}
                />
                <TextField
                    label="Admin ID"
                    variant="outlined"
                    style={{
                        marginBottom: '15px',
                        backgroundColor: '#F4F4F4',
                    }}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    style={{
                        marginBottom: '20px',
                        backgroundColor: '#F4F4F4',
                    }}
                />
                <Button
                    onClick={Loginsuccess}
                    variant="contained"
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#3366CC', 
                        color: '#FFFFFF',
                        textTransform: 'none',
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;
