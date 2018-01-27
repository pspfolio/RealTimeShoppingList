import React from 'react';

const AddShoplistPreview = ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    {items.map(item => (
      <p>
        {item.name} - {item.category.name}
      </p>
    ))}
  </div>
);

export default AddShoplistPreview;
