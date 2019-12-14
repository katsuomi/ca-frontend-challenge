import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useParams } from "react-router-dom";
const SeriesShowComponent = () => {
  let id = useParams();
  console.log(id)
  return(
    <>
      <Grid container>
        <Grid item md={2} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          aaaa
        </Grid>
        <Grid item md={2} lg={4}></Grid>
      </Grid>
    </>
  );
}

export default SeriesShowComponent;
