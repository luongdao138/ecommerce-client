import React, { useEffect, useState } from 'react';
import {} from '@material-ui/core';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import Pagination from '@material-ui/lab/Pagination';
import { getProducts } from '../../redux/actions/product';

const ProductPage = ({ limit, type, slug }) => {
  const data = useSelector((state) => state.product.data);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({
    sortBy: '_id',
    order: 'desc',
  });

  const [sortOptions, setSortOptions] = useState([
    {
      id: 1,
      label: 'Newest first',
      isActive: true,
      sortBy: '_id',
      order: 'desc',
    },
    {
      id: 2,
      label: 'Price -- Low to High',
      isActive: false,
      sortBy: 'discountPrice',
      order: 'asc',
    },
    {
      id: 3,
      label: 'Price -- Hign to Low',
      isActive: false,
      sortBy: 'discountPrice',
      order: 'desc',
    },
    {
      id: 4,
      label: 'Popularity',
      isActive: false,
      sortBy: 'views',
      order: 'desc',
    },
  ]);
  console.log(sortOptions);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.total / limit));
    }
  }, [data?.total, limit]);

  useEffect(() => {
    dispatch(
      getProducts({
        type,
        slug,
        limit,
        sortBy: sort.sortBy,
        order: sort.order,
        skip: Number(Number(page - 1) * Number(limit)),
      })
    );
  }, [page, dispatch, sort]);

  const handleChangeSort = (option) => {
    setSortOptions((old) =>
      old.map((x) =>
        x.id === option.id
          ? { ...x, isActive: true }
          : { ...x, isActive: false }
      )
    );
    setSort({
      sortBy: option.sortBy,
      order: option.order,
    });
  };

  return (
    <>
      {data && (
        <div className='container'>
          <div className='sidebar'>dskcsd</div>
          <main className='main'>
            <div className='info'>
              <strong>{data.category}</strong>
              <span>
                (Showing {Number(Number(page - 1) * Number(limit)) + 1} -{' '}
                {Number(Number(page - 1) * Number(limit)) + limit > data.total
                  ? data.total
                  : Number(Number(page - 1) * Number(limit)) + limit}{' '}
                of {data.total} products)
              </span>
            </div>
            {sortOptions && (
              <div className='sort'>
                <strong>Sort by</strong>
                <ul>
                  {sortOptions.map((option) => (
                    <li
                      key={option.id}
                      onClick={() => handleChangeSort(option)}
                      style={{
                        color: option.isActive ? '#0397ff' : 'black',
                        fontWeight: option.isActive ? '500' : '400',
                        borderBottom: option.isActive
                          ? '2px solid #0397ff'
                          : 'none',
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {data.list?.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
            <div
              style={{
                margin: '20px 10px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ fontSize: '14px', fontWeight: 500 }}>
                Page {page} of {totalPages}
              </span>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, page) => setPage(page)}
                color='primary'
              />
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default ProductPage;
