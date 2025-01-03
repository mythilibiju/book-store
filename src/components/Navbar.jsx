import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      style={{
        height: '50px',
        backgroundColor: '#3366CC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/main" style={{ marginRight: '10px', color: '#FFFFFF', textDecoration: 'none', fontSize: '18px' }}>
          <FaHome size={24} />
        </Link>
        <Link to="users" style={{ marginRight: '10px', color: '#FFFFFF', textDecoration: 'none', fontSize: '16px' }}>
          Manage Users
        </Link>
        <Link to="book" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '16px' }}>
          Manage Books
        </Link>
      </div>
      <div>
        <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
          <IoIosLogOut size={24} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
