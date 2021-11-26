import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles({
  paperStyle: {
    padding: "20px",
    width: 350,
    margin: "0px auto",
  },
  headerStyle: {
    margin: 0,
  },
  avatarStyle: {
    backgroundColor: "#1bbd7e !important",
  },
  marginTop: {
    marginTop: 5,
  },
  Textfield: {},
});

export default function SignUp() {
  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={20} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar className={classes.avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 className={classes.headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            className={classes.Textfield}
          />
          <TextField fullWidth label="Email" />
          <FormControl component="fieldset" className={classes.marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Phone Number" />
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms and conditions"
          />
          <Button type="submit" variant="contained" color="primary">
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}
