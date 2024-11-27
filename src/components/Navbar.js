import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Vrs Security
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={{ marginLeft: 2 }}>
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/users" sx={{ marginLeft: 2 }}>
          Users
        </Button>
        <Button color="inherit" component={Link} to="/roles" sx={{ marginLeft: 2 }}>
          Roles
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
