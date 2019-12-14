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
      <Grid container className="vh100">
        {pages && (
          <Grid item xs={12}>
            <Card>
              <img src={pages[0].imageUrl} alt={pages[0].imageUrl} className="pageStyle" />
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default BooksShow;
