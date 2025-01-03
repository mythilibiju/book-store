import React from 'react';

function Dashboard() {
  const data = [
    { title: 'Total Books:', number: '120' },
    { title: 'Book Rented:', number: '45' },
    { title: 'Books Available:', number: '75' },
    { title: 'Total Users:', number: '300' },
    { title: 'Overdue Books:', number: '10' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#F4F4F4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#3366CC', fontWeight: 'bold' }}>
        Admin Dashboard
      </h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
        {data.map((detail, index) => (
          <div 
            key={index} 
            style={{ 
              background: '#FFFFFF',
              padding: '20px', 
              borderRadius: '10px', 
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
              textAlign: 'center', 
              width: '220px',
            }}
          >
            <h4 style={{ margin: '10px 0', fontSize: '16px', color: '#333333' }}>{detail.title}</h4>
            <h4 style={{ fontSize: '2em', margin: '10px 0', color: '#3366CC' }}>{detail.number}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
