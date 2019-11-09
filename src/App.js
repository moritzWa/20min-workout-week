import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

import Timer from './Timer'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2rem',
    flexGrow: 1,
    backgroundColor: 'grey',
    height: 'calc(100vh - 4rem)'
  },
  navbar: {
    height: '4rem'
  },
  logo: {
    color: 'white',
    fontWeight: 'bold'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '10px',
    height: 'calc(50vh - 7rem)'
  }
}))

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.navbar}>
        <Typography className={classes.logo} variant='h4'>
          20 min Workout Week
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>History of last Workouts</Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>Tracking</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Timer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
export default App
