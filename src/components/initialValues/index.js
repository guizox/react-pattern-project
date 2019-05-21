import React from "react";
import { Grid, TextField } from "@material-ui/core";

function InitialValues({ classes }) {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <TextField
          id="outlined-number"
          label="Number"
          value={this.state.age}
          onChange={() => {}}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
      </Grid>
    </Grid>
  );
}

export default InitialValues;
