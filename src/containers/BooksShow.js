import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const BooksShow = () => {
  let id = useParams().id;
  const book = useSelector(state => state.books.book);
  const [ getAllSeries,getSeries,getBook ] = useActions();
  useEffect(() => {
    getBook(id)
  }, []);
  const pages = book && book.imageData
  console.log(pages)
  return(
    <>
      <Grid container>
        {pages && pages.map((page,i) => (
          <Grid item xs={12} key={i}>
            <Card>
              <img src={page.imageUrl} alt={page.imageUrl} width="100%" />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default BooksShow;
