import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
//import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Navbar />
        <div className="p-4">
          <h2>Dashboard</h2>
          <div className="row mt-4">
            <DashboardCard title="Users" count="120" />
            <DashboardCard title="Revenue" count="$5,000" />
            <DashboardCard title="Orders" count="85" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
