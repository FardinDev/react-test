import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import MediaControlCard from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event) {
    setSpacing(Number(event.target.value));
  }

  return (
    <Grid container className={classes.root}  m={0}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          {[0, 1, 2, 4].map(value => (
            <Grid key={value} item>
              {/* <Paper className={classes.paper} /> */}
              <MediaControlCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}