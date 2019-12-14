import React, { useState,useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import ImgsViewer from 'react-images-viewer';
import CardContent from '@material-ui/core/CardContent';
import { Link,useParams,history } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const BooksShow = (props) => {
  const [currentPageCount, setCurrentPageCount] = useState(0)
  const [favoriteCount, setfavoriteCount] = useState(0)
  const [isGifDisplay, setIsGifDisplay] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const book = useSelector(state => state.books.book);
  const [ getAllSeries,getSeries,getBook,postFavorite ] = useActions();

  const index = window.location.search.replace('?index=', '')
  let id = useParams().id;
  const getIndex = () => {
    index && setCurrentPageCount(currentPageCount + Number(index))
  }
  useEffect(() => {
    getBook(id);
    getIndex();
  }, []);
  const pages = book && book.imageData
  const imgSet = ( pages || []).map((page) =>{
    return {
      src: page.imageUrl
    };
  })

  if (imgSet.length === 0) {
    return null;
  }

  const onHandleClick = () => {
    setfavoriteCount(favoriteCount + 1)
    if(favoriteCount === 1){
      setIsGifDisplay(true);
      postFavorite(imgSet[currentPageCount].src,id,currentPageCount)
      window.setTimeout(() => setIsGifDisplay(false), 1200);
      setfavoriteCount(0)
    }
  }
  !isOpen && props.props.history.push('/')

  return(
    <>
      <Grid container className='vh100'>
        {isGifDisplay && 
          <div className='likeStyle'>
            <img src={`${process.env.PUBLIC_URL}/images/like.gif`} alt='like' className='likeStyle2' />
          </div>
        }
        <ImgsViewer
          imgs={imgSet}
          currImg={currentPageCount}
          isOpen={isOpen}
          onClickPrev={() => setCurrentPageCount(currentPageCount - 1)}
          onClickNext={() => setCurrentPageCount(currentPageCount + 1)}
          onClickImg={onHandleClick}
          onClose={() => setIsOpen(false)}
        />
      </Grid>
    </>
  );
}

export default BooksShow;
