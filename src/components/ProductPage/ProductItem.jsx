import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

const ProductItem = ({ product }) => {
  const rootImageUrl = 'http://localhost:5000/uploads/products/';

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
        <img
          className='product-page__image'
          src={`${rootImageUrl}${product.images[0]}`}
          alt=''
        />
      </Grid>
      <Grid item xs={6}>
        <h4 className='product-page__name'>
          <Link to='/'>{product.title}</Link>
        </h4>
        {/* <div> */}
        <Link className='product__rating' to='/'>
          <span className='star'>
            4.3 <StarIcon fontSize='small' />{' '}
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
          <li>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</li>
          <li>16.56 cm (6.52 inch) HD+ Display</li>
          <li>48MP + 8MP + 2MP | 8MP Front Camera</li>
          <li>6000 mAh Lithium-ion Battery</li>
          <li>MediaTek Helio G85 Processor</li>
          <li>
            Brand Warranty of 1 Year Available for Mobile and 6 Months for
            Accessories
          </li>
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
