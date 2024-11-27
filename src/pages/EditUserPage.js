import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper, Snackbar, Alert } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', role: '', status: 'Active' });
  const [success, setSuccess] = useState(false); // State for success alert

  // Predefined roles
  const roles = ['Admin', 'Editor', 'Viewer', 'Manager', 'Employee'];

  // Load user data based on ID
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find((user) => user.id === parseInt(id));
    if (existingUser) {
      setUser(existingUser);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = storedUsers.map((u) => (u.id === parseInt(id) ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setSuccess(true); // Show success alert
    setTimeout(() => {
      navigate('/users'); // Redirect after a short delay
    }, 2000); // Delay for 2 seconds
  };

  return (
    <Container component={Paper} elevation={3} maxWidth="sm" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Edit User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Role"
              select
              fullWidth
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              SelectProps={{ native: true }}
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Status"
              select
              fullWidth
              value={user.status}
              onChange={(e) => setUser({ ...user, status: e.target.value })}
              SelectProps={{ native: true }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </TextField>
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for success message */}
      <Snackbar open={success} autoHideDuration={2000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          User details updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EditUserPage;
