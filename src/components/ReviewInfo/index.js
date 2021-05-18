import React from 'react';
import Image from '../../common/Image';
import './style.css';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

const ReviewInfo = ({ product, ratingCount, reviewCount, average }) => {
  if (!product) return null;
  return (
    <div className='review-info'>
      <Link to={`/products/detail/${product?.slug}`}>
        <div className='review-info-img'>
          <Image publicId={product.images[0]} />
        </div>
        <h4 className='product-page__name'>{product.title}</h4>

        <div className='product__rating'>
          <span className='star'>
            {average} <StarIcon fontSize='small' />{' '}
          </span>
          <span className='rating'>
            {ratingCount} {ratingCount > 1 ? 'Ratings' : 'Rating'} &{'  '}
            {reviewCount} {reviewCount > 1 ? 'Reviews' : 'Review'}
          </span>
        </div>
        {/* </div> */}
        <div className='detail__price' style={{ marginTop: '10px' }}>
          {product.price === product.discountPrice ? (
            <span className='price_bold'>${product.price}</span>
          ) : (
            <>
              <span className='price_bold'>${product.discountPrice}</span>
              <span className='price_underline'>${product.price}</span>
              <span className='price_discount'>
                {Math.ceil((1 - product.discountPrice / product.price) * 100)}%
                off
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ReviewInfo;
