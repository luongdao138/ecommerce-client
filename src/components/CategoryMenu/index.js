import React from 'react';
import ParentMenu from './ParentMenu';
import './style.css';

const CategoryMenu = () => {
  return (
    <div style={{ height: '90px' }}>
      <section className='category-menu'>
        <ParentMenu />
      </section>
    </div>
  );
};

export default CategoryMenu;
