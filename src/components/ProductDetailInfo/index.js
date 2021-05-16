import React from 'react';
import './style.css';
import StarIcon from '@material-ui/icons/Star';

const ProductDetaiInfo = ({ product }) => {
  return (
    <>
      <div className='product_detail__info'>
        <h4 className='product-page__name'>{product.title}</h4>

        <div className='product__rating'>
          <span className='star'>
            4.3 <StarIcon fontSize='small' />{' '}
          </span>
          <span className='rating'>
            {product.ratings.length}{' '}
            {product.ratings.length > 1 ? 'Ratings' : 'Rating'} &{'  '}
            {product.reviews.length}{' '}
            {product.reviews.length > 1 ? 'Reviews' : 'Review'}
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
        <div className='detail-section'>
          <p className='detail-title'>Hightlights</p>
          <ul className='product_hightlights'>
            {/* <li>4 GB RAM | 64 GB ROM | Expandable Upto 256 GB</li>
          <li>16.56 cm (6.52 inch) HD+ Display</li>
          <li>48MP + 8MP + 2MP | 8MP Front Camera</li>
          <li>6000 mAh Lithium-ion Battery</li>
          <li>MediaTek Helio G85 Processor</li>
          <li>
            Brand Warranty of 1 Year Available for Mobile and 6 Months for
            Accessories
          </li> */}
            {product.hightlights.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
        <div className='detail-section'>
          <p className='detail-title'>Description</p>
          <p className='detail-des'>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetaiInfo;
