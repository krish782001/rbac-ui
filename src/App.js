import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import AddUserPage from './pages/AddUserPage';
import EditUserPage from './pages/EditUserPage';
import Dashboard from './pages/Dashboard'; // Import the Dashboard page
import Roles from './pages/Roles'; // Import the Roles page

const App = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {/* Change the path to '/dashboard' */}
            <Route path="/" element={<Dashboard />} /> {/* Add a route for Dashboard */}
            <Route path="/users" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/add-user" element={<AddUserPage users={users} setUsers={setUsers} />} />
            <Route path="/edit-user/:id" element={<EditUserPage users={users} setUsers={setUsers} />} />
            <Route path="/roles" element={<Roles />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
