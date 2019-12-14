import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const AllSeries = () => {
  const allSeries = useSelector(state => state.series.allSeries);
  const [ getAllSeries,getSeries,getBook ] = useActions();
  useEffect(() => {
    getAllSeries()
  }, []);

  return(
    <>
      <Grid container>
        {allSeries.map((series,i) => (
          <Grid item xs={12} key={i}>
            <Link to={"/series/"+series.seriesId}>
              <Card>
                <img src={series.seriesImage} alt={series.title} className='allSeriesImg' />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AllSeries;