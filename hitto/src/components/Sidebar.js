import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3" style={{ minHeight: '100vh', width: '200px' }}>
      <h4>Hitto Admin</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">🏠 Dashboard</li>
        <li className="nav-item mb-2">👥 Users</li>
        <li className="nav-item mb-2">📦 Products</li>
        <li className="nav-item mb-2">⚙️ Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
