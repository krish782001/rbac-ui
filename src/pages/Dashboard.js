import React, { useEffect, useState } from 'react';
import './Dashboard.css'; // Add the CSS file for styling

const Dashboard = () => {
  // State variables to hold the fetched data
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRoles, setTotalRoles] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Fetching data from localStorage and setting default values if not present
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const rolesData = JSON.parse(localStorage.getItem('roles')) || [];

    // Setting the data into the state
    setTotalUsers(usersData.length); // Set total users
    setTotalRoles(rolesData.length); // Set total roles
    setActiveUsers(usersData.filter(user => user.status === 'Active').length); // Active users
  }, []);

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <div className="card-container">
          <div className="card">
            <h3>Total Users</h3>
            <p>{totalUsers}</p> {/* Displaying total users */}
          </div>
          <div className="card">
            <h3>Total Roles</h3>
            <p>{totalRoles}</p> {/* Displaying total roles */}
          </div>
          <div className="card">
            <h3>Active Users</h3>
            <p>{activeUsers}</p> {/* Displaying active users */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
