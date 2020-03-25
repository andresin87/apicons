import React, { Component, createRef } from "react";
import { Accounts } from "meteor/accounts-base";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default class RegisterForm extends Component {
  registerUser = (event) => {
    event.preventDefault();
    Accounts.createuser(
      {
        email: this.email.value,
        password: this.password.value,
      },
      (error) => console.log(error)
    );
  };
  email = createRef();
  password = createRef();
  render() {
    return (
      <form onSubmit={this.registerUser}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TextField type="email" ref={this.email} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TextField type="password" ref={this.password} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Button variant="contained" color="primary" type="submit">Register User</Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
