import React from 'react';
import './style.css';
import StarIcon from '@material-ui/icons/Star';

const ProductDetaiInfo = ({ product, average, ratingCount, reviewCount }) => {
  return (
    <>
      {product && (
        <div className='product_detail__info'>
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
                  {Math.ceil((1 - product.discountPrice / product.price) * 100)}
                  % off
                </span>
              </>
            )}
          </div>
          <div className='detail-section'>
            <p className='detail-title'>Hightlights</p>
            <ul className='product_hightlights'>
              {product.hightlights.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
          <div className='detail-section'>
            <p className='detail-title'>Description</p>
            <p className='detail-des'>{product.description}</p>
          </div>
          <div className='detail-specs'>
            <h3>Specifications</h3>
            <div className='detail-specs__children'>
              {product.specifications.map((spec, index) => {
                return (
                  <div className='spec__item' key={index}>
                    <h4>{spec.name}</h4>
                    <ul>
                      {spec.values?.map((x, _index) => {
                        return (
                          <li key={_index}>
                            <span className='spec_item__title'>{x.label}</span>
                            <span className='spec_item__value'>{x.value}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetaiInfo;
