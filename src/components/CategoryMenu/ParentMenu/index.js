import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { generateLinearCategories } from '../../../helpers/category';
import './style.css';

const ParentMenu = () => {
  const list = useSelector((state) => state.category.list);
  const rootImageUrl = 'http://localhost:5000/uploads/categories/';
  // http://localhost:5000/api/v1/products/${cat.slug}?type=${cat.type}&limit=3
  const renderCategories = (categories) => {
    let result = [];

    for (let cat of categories) {
      if (cat.parentId) {
        result.push(
          <li key={cat._id}>
            <Link to={`/products/${cat.slug}?type=${cat.type}`}>
              {cat.name}
            </Link>
            <ul>{renderCategories(cat.children)}</ul>
          </li>
        );
      } else {
        result.push(
          <div key={cat._id} className='menu-wrapper'>
            <span
              to='/'
              // onClick={() => javascript.void(0)}
              key={cat._id}
              className='parent-menu__item'
            >
              <img src={`${rootImageUrl}${cat.image}`} alt='' />
              <span>{cat.name}</span>
            </span>
            <ul>{renderCategories(cat.children)}</ul>
          </div>
        );
      }
    }
    return result;
  };

  return <div className='parent-menu'>{list && renderCategories(list)}</div>;
};

export default ParentMenu;
