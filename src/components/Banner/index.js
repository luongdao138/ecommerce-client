import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../redux/actions/banner';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './style.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Banner = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.banner.list);
  const rootImageUrl = 'http://localhost:5000/uploads/banners/';

  useEffect(() => {
    if (!list) {
      dispatch(getBanners());
    }
  }, [dispatch]);

  return (
    <div className='banner__wrapper'>
      {list && (
        <Carousel
          renderThumbs={() => {}}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          infiniteLoop={true}
          renderArrowPrev={(clickHandler) => (
            <button className='arrow left' onClick={clickHandler}>
              <ChevronLeftIcon fontSize='large' />
            </button>
          )}
          renderArrowNext={(clickHandler) => (
            <button className='arrow-right'>
              <ChevronRightIcon fontSize='large' onClick={clickHandler} />
            </button>
          )}
        >
          {list.map((banner) => {
            return (
              <Link
                key={banner._id}
                to={banner.navigateTo}
                style={{ display: 'block' }}
              >
                <img src={`${rootImageUrl}${banner.image}`} alt='' />
              </Link>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Banner;
