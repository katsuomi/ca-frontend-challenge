import React from 'react';
import Grid from '@material-ui/core/Grid';
import BooksShow from '../containers/BooksShow';

const BooksShowComponent = () => {
  return(
    <>
      <Grid container>
        <Grid item md={1} lg={1}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <BooksShow />
        </Grid>
        <Grid item md={1} lg={1}></Grid>
      </Grid>
    </>
  );
}

export default BooksShowComponent;
