import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const FavoritesIndex = () => {
  const allFavorites = useSelector(state => state.favorites.allFavorites);
  console.log(allFavorites)
  return(
    <>
      {allFavorites.map((page,i) => (
        <div key={i}>
          <Link to={`/books/${page.id}?index=${page.index}`}>
            <img src={page.imageUrl} alt="favorite" width='50%' />
          </Link>
        </div>
      ))}
    </>
  );
}

export default FavoritesIndex;