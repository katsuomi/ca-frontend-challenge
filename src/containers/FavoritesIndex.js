import React, {  } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FavoritesIndex = () => {
  const allFavorites = useSelector(state => state.favorites.allFavorites);
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

  const uniqAllFavorites = allFavorites
  .reduce((array, item) => { // 3. uniqueな値のみ抽出
    const some = array.some(
      v => v.id === item.id && v.index === item.index
    );
    if (!some){
      array.push(item);
    }

    return array;
  },[]);

  return(
    <>
      <p className='favoritePagesFontStyle'>いいねしたページ({allFavorites && uniqAllFavorites.length})</p>
      <Slider {...settings}>
        {allFavorites && uniqAllFavorites.map((page,i) => (
          <div key={i}>
            <Link to={`/books/${page.id}?index=${page.index}`}>
              <img src={page.imageUrl} alt='favorite' className='top-slider-image-style' />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default FavoritesIndex;
