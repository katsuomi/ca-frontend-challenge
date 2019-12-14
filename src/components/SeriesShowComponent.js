import React from 'react';
import Grid from '@material-ui/core/Grid';
import SeriesShow from '../containers/SeriesShow';

const SeriesShowComponent = () => {
  return(
    <>
      <Grid container>
        <Grid item md={2} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <SeriesShow />
        </Grid>
        <Grid item md={2} lg={4}></Grid>
      </Grid>
    </>
  );
}

export default SeriesShowComponent;
