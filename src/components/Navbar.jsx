import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      style={{
        height: '40px',
        width: '100%', 
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        backgroundColor: 'lightgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/main" style={{ marginRight: '15px' }}><FaHome size={30} /></Link>
        <Link to="users" style={{ marginRight: '15px' }}>Manage users</Link>
        <Link to="book">Manage Books</Link>
      </div>
      <div>
        <Link to="/">
          <IoIosLogOut size={30} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
