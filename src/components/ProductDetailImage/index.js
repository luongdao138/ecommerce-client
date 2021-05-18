import './style.css';
import React, { useEffect, useState } from 'react';
import Image from '../../common/Image';

const findActiveImage = (slides) =>
  slides.find((slide) => slide.isActive === true)?.img;

const ProductDetailImage = ({ product }) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    if (product) {
      setSlides(
        product.images.map((image, index) => ({
          img: image,
          isActive: index === 0 ? true : false,
        }))
      );
    }
  }, [product?.images]);
  console.log(slides);

  const handleMouseEnter = (index) => {
    setSlides((old) =>
      old.map((x, _index) =>
        _index === index ? { ...x, isActive: true } : { ...x, isActive: false }
      )
    );
  };

  return (
    <div className='product-image__wrapper'>
      <div className='product-image__wrapper__top'>
        <div className='product-image__wrapper__thumb'>
          {slides.map((slide, index) =>
            slide.isActive ? (
              <div
                key={index}
                style={{ border: '1.5px solid #2874F0' }}
                className='thumb_item'
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Image
                  publicId={slide.img}
                  className='thumb_item__img'
                  alt=''
                />
              </div>
            ) : (
              <div
                key={index}
                className='thumb_item'
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Image
                  publicId={slide.img}
                  className='thumb_item__img'
                  alt=''
                />
              </div>
            )
          )}
        </div>
        <div className='product-image__wrapper__main'>
          {findActiveImage(slides) && (
            <Image
              publicId={findActiveImage(slides)}
              alt=''
              className='main_img'
            />
          )}
        </div>
      </div>
      <div className='product-image__wrapper__bottom'>
        <button className='product-image__wrapper__btn add-cart'>
          Go To Cart
        </button>
        <button className='product-image__wrapper__btn buy-now'>Buy now</button>
      </div>
    </div>
  );
};

export default ProductDetailImage;
