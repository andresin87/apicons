import React, { Component, createRef } from "react";
import { Accounts } from "meteor/accounts-base";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class RegisterForm extends Component {
  registerUser = (event) => {
    event.preventDefault();
    Accounts.createUser(
      {
        email: this.email.current.value,
        password: this.password.current.value,
      },
      (error) => console.log(error)
    );
  };
  email = createRef();
  password = createRef();
  render() {
    return (
      <>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            Appicon
          </Typography>
        </Grid>
        <Grid item>
          <Paper
            elevation={3}
            style={{ height: 200, maxWidth: 600, width: "50vw" }}
          >
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
              direction="column"
              style={{ height: "100%" }}
              spacing={1}
            >
              <Grid item>
                <TextField
                  label="Email"
                  placeholder="@mail"
                  type="email"
                  inputRef={this.email}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  placeholder="*****"
                  type="password"
                  inputRef={this.password}
                />
              </Grid>
              <Grid item>
                <Button
                  onClick={this.registerUser}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Register User
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </>
    );
  }
}
