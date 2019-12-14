import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useActions } from '../actions';
import { useSelector } from 'react-redux';

const AllSeries = () => {
  const allSeries = useSelector(state => state.series.allSeries);
  const [ getAllSeries,getSeries,getBook ] = useActions();
  useEffect(() => {
    getAllSeries()
  }, []);

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

  return(
    <>
      <p className="nowReadableMangaFontStyle">現在読める漫画({allSeries.length})</p>
      <Slider {...settings}>
        {allSeries.map((series,i) => (
          <div key={i}>
            <Link to={'/series/'+series.seriesId}>
              <img src={series.seriesImage} alt={series.title} className='top-slider-image-style' />
              {/* <span className='none-less-1220px'><span className='ribbon12'>{series.title}</span></span> */}
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default AllSeries;