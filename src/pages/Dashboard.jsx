import React from 'react';
import Login from './Login';
function Dashboard() {
  const data = [
    { title: 'Total Books:', number: '120' },
    { title: 'Book Rented:', number: '45' },
    { title: 'Books Available:', number: '75' },
    { title: 'Total Users:', number: '300' },
    { title: 'Overdue Books:', number: '10' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Dashboard</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {data.map((detail, index) => (
          <div 
            key={index} 
            style={{ 
              background: 'lightgrey', 
              padding: '15px 20px', 
              borderRadius: '5px', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center', 
              margin: '10px', 
              width: '200px',
              flex: '0 1 calc(33.33% - 20px)',
              boxSizing: 'border-box',
            }}
          >
            <h4 style={{ margin: '10px 0' }}>{detail.title}</h4>
            <h4 style={{ fontSize: '1.5em', margin: '10px 0' }}>{detail.number}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
