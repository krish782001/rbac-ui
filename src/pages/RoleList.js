import React from 'react';

const RoleList = ({ roles }) => {
  return (
    <div>
      {roles && roles.length > 0 ? (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td>{role.permissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No roles available</p>
      )}
    </div>
  );
};

export default RoleList;
