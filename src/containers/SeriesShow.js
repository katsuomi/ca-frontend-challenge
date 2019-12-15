import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const SeriesShow = () => {
  let id = useParams().id;
  const series = useSelector(state => state.series.series);
  const [ getAllSeries,getSeries,getBook,postFavorite ] = useActions();
  useEffect(() => {
    getSeries(id)
  }, []);
  const books = series && series.books
  return(
    <>
      <Grid container>
        {books && books.map((book,i) => (
          <Grid item xs={6} md={6} lg={4} key={i}>
            <Link to={'/books/'+book.id}>
              <LazyLoad height={500} >
                <img src={book.image} alt={book.title} className='allBooksImg' />
              </LazyLoad>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SeriesShow;
