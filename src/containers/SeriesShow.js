import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const SeriesShow = () => {
  let id = useParams().id;
  const series = useSelector(state => state.series.series);
  const [ _,getSeries ] = useActions();
  useEffect(() => {
    getSeries(id)
  }, []);
  console.log(series)
  return(
    <>
      aaaaaaa
    </>
  );
}

export default SeriesShow;