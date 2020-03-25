import React from 'react';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBar = () => (
  <MaterialAppBar position="static">
    <MaterialToolbar >
      <Typography variant="h6" >
        AppIcons
      </Typography>
    </MaterialToolbar>
  </MaterialAppBar>
);

export default AppBar;
