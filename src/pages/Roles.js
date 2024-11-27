import React, { useState } from 'react';
import RoleList from '../components/RoleList';

const Roles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: 'Read, Write, Delete' },
    { id: 2, name: 'Editor', permissions: 'Read, Write' },
  ]);

  return (
    <div>
      <h2>Role Management</h2>
      <RoleList roles={roles} />
    </div>
  );
};

export default Roles;
