import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


export default class CreateRoomPage extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };
  }

    handleVotesChnage(e) {
      this.setState({
        votesToSkip : e.target.value,
      })
    }

    handleGuestCanPauseChange(e) {
      this.setState({
        guestCanPause: e.target.value === "true" ? true : false,
      });
    }

  render() {
    return( 
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
      <Typography component="h4" variant="h4">
        Create A Room
      </Typography>
        <FormControl Component="fieldset">
          <FormHelperText>
            <div align="center">
              Guest Control of Playback State
            </div>
          </FormHelperText>
          <RadioGroup row defaultValue="true">
            <FormControlLabel value="true" control={<Radio color='primary'/>} label="play/pause" labelPlacement="bottom"/>
            <FormControlLabel value="false" control={<Radio color='secondary'/>} label="No Control" labelPlacement="bottom"/>
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl>
          <TextField required={true} type="number" defaultValue={this.defaultVotes} inputProps={
            {
              min: 1,
              style: { textAlign: "center"},
            }
          }/>
          <FormHelperText >
            <div align="center">
              Votes required to skip Song
            </div>
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="primary" variant="contained">
          Create A Room
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}> 
          back
        </Button>
      </Grid>
    </Grid>
    );
  }
}
