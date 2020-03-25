import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MaterialAppBar from "@material-ui/core/AppBar";
import MaterialToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import NewAccountDomain from '../../domains/NewAccountDomain'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBar = () => {
  const classes = useStyles();
  return (
    <MaterialAppBar position="static">
      <MaterialToolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          AppIcons
        </Typography>
        <Button href={'#'} color="inherit">Login</Button>
        <Button href={NewAccountDomain.path} color="inherit">Sign In</Button>
      </MaterialToolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
