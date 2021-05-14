import React from 'react';
import { useSelector } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const ProductSlide = ({ slug }) => {
  const data = useSelector((state) => state.product.data);
  const rootImageUrl = 'http://localhost:5000/uploads/page_banners/';
  if (!data || !data.page) return <p>Loading...</p>;

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ fontWeight: 500, marginBottom: '12px' }}>
        {data.page.title}
      </h3>
      {data.page.banners && (
        <Carousel
          renderThumbs={() => {}}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
        >
          {data.page.banners.map((banner) => {
            return (
              <Link
                key={banner._id}
                to={`/products/${slug}?type=product`}
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

export default ProductSlide;
