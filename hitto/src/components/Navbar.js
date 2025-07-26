import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <span className="navbar-brand mb-0 h4">Welcome, Admin</span>
      <div>
        <button className="btn btn-outline-primary">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
