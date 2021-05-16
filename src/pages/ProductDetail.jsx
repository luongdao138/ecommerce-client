import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductDetaiInfo from '../components/ProductDetailInfo';
import { getProductBySlug } from '../services/product';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductBySlug(slug)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((error) => console.log(error));
  }, [slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div
      style={{
        padding: 10,
        position: 'relative',
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <ProductDetailImage product={product} />
        </Grid>
        <Grid item xs={8}>
          <ProductDetaiInfo product={product} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetail;
