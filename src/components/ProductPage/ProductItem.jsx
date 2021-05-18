import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import Image from '../../common/Image';

const ProductItem = ({ product }) => {
  return (
    <Grid
      container
      style={{
        padding: '25px 10px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to={`/products/detail/${product.slug}`}>
          <Image
            className='product-page__image'
            publicId={product.images[0]}
            alt=''
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <h4 className='product-page__name'>
          <Link to={`/products/detail/${product.slug}`}>{product.title}</Link>
        </h4>
        {/* <div> */}
        <Link
          className='product__rating'
          to={`/products/detail/${product.slug}`}
        >
          <span className='star'>
            {product.averageRating} <StarIcon fontSize='small' />{' '}
          </span>
          <span className='rating'>
            {product.ratingCount}{' '}
            {product.ratingCount > 1 ? 'Ratings' : 'Rating'} &{'  '}
            {product.reviewCount}{' '}
            {product.reviewCount > 1 ? 'Reviews' : 'Review'}
          </span>
        </Link>
        {/* </div> */}
        <ul className='product_hightlights'>
          {product.hightlights.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={3}>
        {product.price === product.discountPrice ? (
          <h3 className='price_bold'>${product.price}</h3>
        ) : (
          <>
            <h3 className='price_bold'>${product.discountPrice}</h3>
            <span className='price_underline'>${product.price}</span>
            <span className='price_discount'>
              {Math.ceil((1 - product.discountPrice / product.price) * 100)}%
              off
            </span>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ProductItem;
