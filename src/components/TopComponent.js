import React from 'react';
import Grid from '@material-ui/core/Grid';
import SeriesIndex from '../containers/SeriesIndex';

const TopComponent = () => {
  return(
    <>
      <section className="width100percent">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={2}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
            <SeriesIndex />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={2}></Grid>
        </Grid>
      </section>
    </>
  );
}

export default TopComponent;
