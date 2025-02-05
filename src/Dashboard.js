import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear any authentication state
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ 
        width: '250px', 
        backgroundColor: '#f0f0f0', 
        height: '100vh', 
        padding: '20px' 
      }}>
        <h2>Dashboard</h2>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/students" 
                style={{ 
                  textDecoration: 'none', 
                  color: 'black' 
                }}
              >
                Students
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'red', 
                  cursor: 'pointer' 
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;