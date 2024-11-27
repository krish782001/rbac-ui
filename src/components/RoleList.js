import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const RoleList = ({ roles, onDeleteRole, onEditRole }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePermissions, setNewRolePermissions] = useState('');

  const handleOpenEditModal = (role) => {
    setSelectedRole(role);
    setNewRoleName(role.name);
    setNewRolePermissions(role.permissions);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleSaveChanges = () => {
    if (onEditRole) {
      onEditRole(selectedRole.id, { name: newRoleName, permissions: newRolePermissions });
    }
    handleCloseEditModal();
  };

  const handleDeleteRole = (roleId) => {
    if (onDeleteRole) {
      onDeleteRole(roleId);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="roles table">
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpenEditModal(role)}>Edit</Button>
                  <Button onClick={() => handleDeleteRole(role.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Role</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            fullWidth
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
          />
          <TextField
            label="Permissions"
            fullWidth
            value={newRolePermissions}
            onChange={(e) => setNewRolePermissions(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleSaveChanges}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RoleList;
