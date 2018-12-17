import './Category.css';

import React from 'react';

const Category = props => {
  const { title, children } = props;
  return (
    <tr>
      <td colSpan={2} className="category">
        {title}
      </td>
      {children}
    </tr>
  );
};

export default Category;
