import React from 'react';
import Grid from '@material-ui/core/Grid';
import SeriesIndex from '../containers/SeriesIndex';

const TopComponent = () => {
  return(
    <>
      <Grid container>
        <Grid item md={2} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <SeriesIndex />
        </Grid>
        <Grid item md={2} lg={4}></Grid>
      </Grid>
    </>
  );
}

export default TopComponent;
