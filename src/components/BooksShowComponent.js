import React from 'react';
import Grid from '@material-ui/core/Grid';
import BooksShow from '../containers/BooksShow';

const BooksShowComponent = () => {
  return(
    <>
      <Grid>
        <Grid item lg={1}></Grid>
        <Grid item xs={12} lg={10}>
          <BooksShow />
        </Grid>
        <Grid item lg={1}></Grid>
      </Grid>
    </>
  );
}

export default BooksShowComponent;
