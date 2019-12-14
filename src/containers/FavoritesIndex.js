import React, {  } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavoritesIndex = () => {
  const allFavorites = useSelector(state => state.favorites.allFavorites);
  console.log(allFavorites)
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '300px',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        }
      }
    ]
  };

  if (allFavorites === undefined || allFavorites.length === 0) {
    return null;
  }

  return(
    <>
      <p className="favoritePagesFontStyle">いいねしたページ({allFavorites.length})</p>
      <Slider {...settings}>
        {allFavorites.map((page,i) => (
          <div key={i}>
            <Link to={`/books/${page.id}?index=${page.index}`}>
              <img src={page.imageUrl} alt="favorite" className='top-slider-image-style' />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default FavoritesIndex;
