import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/dashboard/students');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
     
      height: '100vh' 
    }}>
      <form onSubmit={handleLogin} style={{ width: '300px'}}>
        <h2>Login </h2>
    
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '9px 0' }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
        </div>
        <button 
          type="submit"
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: 'Green', 
            color: 'white', 
            border: 'none' 
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;