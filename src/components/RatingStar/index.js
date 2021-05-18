import React from 'react';
import './style.css';
import StarIcon from '@material-ui/icons/Star';
import { Grid } from '@material-ui/core';

const RatingStar = ({ ratings, reviewCount }) => {
  const stars = [1, 2, 3, 4, 5];
  if (!ratings) return null;
  return (
    <>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className='average'>
          {ratings?.average} <StarIcon />
        </h1>
        <p className='rating-count'>
          {ratings?.total} {ratings?.total > 1 ? 'Ratings' : 'Rating'}
        </p>
        <p className='rating-count'>&</p>
        <p className='rating-count'>{reviewCount} Reviews</p>
      </Grid>
      <Grid item xs={4}>
        <ul className='list-star'>
          {stars.map((star, index) => {
            const count = ratings.details[star.toString()]
              ? ratings.details[star.toString()]
              : 0;
            const percent = Math.round((count / ratings.total) * 100);
            return (
              <li key={index}>
                <span className='star-number'>
                  {star}{' '}
                  <StarIcon
                    fontSize='small'
                    style={{ marginLeft: 2, width: 15 }}
                  />
                </span>
                <span className='progress'>
                  <span
                    style={{
                      right: `${100 - percent}%`,
                    }}
                  ></span>
                </span>
                <span className='star-value'>
                  {ratings?.details[star.toString()]
                    ? ratings?.details[star.toString()]
                    : 0}
                </span>
              </li>
            );
          })}
        </ul>
      </Grid>
    </>
  );
};

export default RatingStar;
